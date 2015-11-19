SimpleSchema.messages({invalidVideoUrl: "Invalid YouTube Video Url"});

AutoFormSchemas = {};

AutoFormSchemas.Download = new SimpleSchema({
  searchTerm: {
    type: String,
    autoform: {
      label: false,
      placeholder: "Search Term or YouTube Video url"
    },
    custom: function() {
      var videoUrl = this.value;
      if (this.value.indexOf("youtube.com/watch?v=") === -1) {
        return "invalidVideoUrl";
      }
    }
  }
});