Meteor.methods({
  insertDownload: function(videoId, videoInfo) {
    var download = Downloads.findOne({videoId: videoId});
    if (download) {
      Downloads.update({videoId: videoId}, {
        $inc: {
          numDownloads: 1
        }
      });
    }
    else {
      if (videoInfo && videoInfo.items && videoInfo.items.length === 1) {
        videoInfo = videoInfo.items[0];
      }
      Downloads.insert({
        videoId: videoId,
        videoInfo: videoInfo,
        numDownloads: 1
      });
    }
  }
})