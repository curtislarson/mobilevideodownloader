var YouTubeSearch = null;
var ShowResults = new ReactiveVar(false);

Template.downloader.onCreated(function() {
  var options = {
    keepHistory: 1000 * 60 * 5,
    localSearch: true
  };
  var fields = ["title"];

  YouTubeSearch = new SearchSource("youtube", fields, options);
});

Template.downloader.events({
  "keyup #searchTerm": _.throttle(function(event) {
    var val = $(event.currentTarget).val();
    if (val !== "") {
      ShowResults.set(true);
      YouTubeSearch.search(val);
    }
    else {
      YouTubeSearch.search(null);
    }
  }, 100),

  "keyup #downloadForm": function() {
    event.stopPropagation();
  }
});

Template.downloader.helpers({
  downloadSchema: function() {
    return AutoFormSchemas.Download;
  },

  searchResults: function() {
    var data = YouTubeSearch.getData();
    console.log("data=", data);
    return data;
  },

  showResults: function() {
    return ShowResults.get();
  }
});

AutoForm.addHooks("downloadForm", {
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    check(insertDoc, AutoFormSchemas.Download);
    console.log(insertDoc);
    var url = insertDoc.searchTerm;
    Router.go("/download?url=" + encodeURIComponent(url));
    this.done();
    return false;
  },

  onSuccess: function(formType, result) {
  },

  onError: function(formType, error) {
    console.log("onError", formType, error);
    switch(formType) {
      case "pre-submit validation":
        // This is handled by our error messages by the fields
        break;
      default:
        if (error.reason) {
          Notifications.error("Error!",
                              "Error downloading video" + error.reason);
        }
        else {
          Notifications.error("Error!", "Error downloading video");
        }
        break;
    }
  }
});

Template.downloader_autocomplete.onRendered(function() {
  $(".autocomplete-container").width($("#searchTerm").width());
});

Template.downloader_autocomplete.events({
  "click .autocomplete-item": function() {
    if (this) {
      if (this.id.videoId) {
        // Search term
        $("#searchTerm").val("http://www.youtube.com/watch?v=" + this.id.videoId);
      }
      else if (this.id) {
        $("#searchTerm").val("http://www.youtube.com/watch?v=" + this.id);
      }
      ShowResults.set(false);
    }
  }
})