Meteor.methods({
  insertDownload: function(videoId) {
    var download = Downloads.findOne({videoId: videoId});
    if (download) {
      Downloads.update({videoId: videoId}, {
        $inc: {
          numDownloads: 1
        }
      });
    }
    else {
      Downloads.insert({
        videoId: videoId,
        numDownloads: 1
      });
    }
  }
})