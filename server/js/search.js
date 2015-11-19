SearchSource.defineSource("youtube", function(searchText, options) {

  if (!searchText) {
    return [];
  }

  var asyncSearch = null;
  if (searchText.indexOf("youtube.com/watch?v=") !== -1) {
    console.log("video url");
    // It's a video url
    searchText = searchText.split("?v=")[1];
    if (searchText.length === 11) {
      // A full id
      asyncSearch = Meteor.wrapAsync(YouTube.getVideoInformation);
    }
  }
  else {
    console.log("search term");
    // It's a search term
    asyncSearch = Meteor.wrapAsync(YouTube.searchVideos);
  }

  if (!asyncSearch) {
    return [];
  }

  try {
    var data = asyncSearch(searchText);
    if (data.items) {
      return data.items.map(function(item) {
        item._id = Random.id();
        return item;
      });
    }
    else {
      throw new Meteor.Error("YouTube Error", "No items found");
    }
  }
  catch(err) {
    console.log(err.stack);
    throw new Meteor.Error("YouTube Error", err.reason || err);
  }
});