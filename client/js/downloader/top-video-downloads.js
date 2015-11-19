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