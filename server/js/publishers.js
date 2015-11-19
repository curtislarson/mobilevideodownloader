Meteor.publish("topDownloads", function() {
  return Downloads.find({}, {
    sort: {
      numDownloads: -1
    },
    limit: 12
  });
});