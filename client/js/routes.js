Router.route("/", {
  name: "index",
  layoutTemplate: "mainLayout",
  action: function() {
    this.render("index");
  }
});

Router.route("/about", {
  name: "about",
  layoutTemplate: "mainLayout",
  action: function() {
    this.render("about");
  }
});

Router.route("/privacy", {
  name: "privacy",
  layoutTemplate: "mainLayout",
  action: function() {
    this.render("privacy");
  }
});

Router.route("/youtube", {
  name: "youtube",
  layoutTemplate: "mainLayout",
  action: function() {
    this.render("index");
  }
});

Router.route("/top-video-downloads", {
  name: "topVideoDownloads",
  layoutTemplate: "mainLayout",
  action: function() {
    this.render("topVideoDownloads");
  }
});