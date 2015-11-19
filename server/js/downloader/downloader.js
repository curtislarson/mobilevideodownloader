var ytdl = Meteor.npmRequire('ytdl-core');

Router.route("/download", function() {
  var downloadUrl = this.params.query.url;
  console.log("url=", downloadUrl);
  if (!downloadUrl) {
    this.response.end();
    return;
  }

  var filename = urlId;
  try {
    var urlId = downloadUrl.split("watch?v=")[1];
    var async = Meteor.wrapAsync(YouTube.getVideoInformation);
    var videoInfo = async(urlId);
    Meteor.call("insertDownload", urlId, videoInfo);
    if (videoInfo) {
      filename = videoInfo.items[0].snippet.title;
    }
  }
  catch(ex) {
    console.log("error getting video data", ex);
  }


  var that = this;
  try {
    that.response.writeHead(200, {
      "Content-Type": "video/mp4",
      'Content-disposition': 'attachment; filename=' + filename + '.mp4'
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