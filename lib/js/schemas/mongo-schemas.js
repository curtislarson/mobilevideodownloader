Schemas = {};

Schemas.Download = new SimpleSchema({
  videoId: {
    type: String
  },
  videoInfo: {
    type: Object,
    blackbox: true
  },
  numDownloads: {
    type: Number
  }
});

Downloads = new Mongo.Collection("downloads");

Downloads.attachSchema(Schemas.Download);