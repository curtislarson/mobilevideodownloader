Template.topVideoDownloads.onRendered(function() {
  Adsense.addTopBarCode();
  document.title = "Top YouTube Downloads - MobileVideoDownloader";
});

Template.topVideoDownloads.helpers({
  topDownloads: function() {
    return Downloads.find({}, {
      sort: {
        numDownloads: -1
      }
    });
  }
});

Template.topDownload.onRendered(function() {
  var width = $(".download-container").width();
  $(".truncate").width(width);
});