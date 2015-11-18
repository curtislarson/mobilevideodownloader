Template.downloader.helpers({
  downloadSchema: function() {
    return AutoFormSchemas.Download;
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