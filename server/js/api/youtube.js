YouTube = {};

YouTube.searchVideos = function(searchText, callback) {
  YoutubeApi.search.list({
    part: "snippet",
    type: "video",
    maxResults: 6,
    q: searchText,
  }, function(err, data) {
    callback(err, data);
  });
};

YouTube.getVideoInformation = function(id, callback) {
  YoutubeApi.videos.list({
    part: "snippet",
    id: id
  }, function(err, data) {
    callback(err, data);
  });
};