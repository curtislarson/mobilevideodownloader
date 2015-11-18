var ytdl = Meteor.npmRequire('ytdl-core');

Router.route("/download", function() {
  var downloadUrl = this.params.query.url;
  console.log("url=", downloadUrl);
  if (!downloadUrl) {
    this.response.end();
    return;
  }

  var urlId = downloadUrl.split("v")[1];

  var that = this;
  try {
    that.response.writeHead(200, {
      "Content-Type": "video/mp4",
      'Content-disposition': 'attachment; filename=' + urlId + '.mp4'
    });
    ytdl(downloadUrl, {
      filter: function(format) {
        return format.container === 'mp4';
      }}).pipe(that.response);
  }
  catch(e) {
    console.log("error", e);
    that.response.write("Error");
    that.response.end();
  }
}, {
  where: "server"
});