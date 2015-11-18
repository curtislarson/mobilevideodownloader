AutoFormSchemas = {};

AutoFormSchemas.Download = new SimpleSchema({
  searchTerm: {
    type: String,
    autoform: {
      label: false,
      placeholder: "Search Term or YouTube Url"
    }
  }
});