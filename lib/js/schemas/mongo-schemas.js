Schemas = {};

Schemas.Download = new SimpleSchema({
  videoId: {
    type: String
  },
  numDownloads: {
    type: Number
  }
});

Downloads = new Mongo.Collection("downloads");

Downloads.attachSchema(Schemas.Download);