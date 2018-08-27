"use strict";

var fs = require("fs");
var path = require("path");
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var ScrapeSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

// Using the Schema constructor, create a new scrapedData object
// This is similar to a Sequelize model
var ScrapedData = mongoose.model("scrape", ScrapeSchema);
ScrapedData.create({
  // `title` must be of type String
  // `title` must be unique, the default mongoose error message is thrown if a duplicate value is given
  // `article` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the article model
  // This allows us to populate the schema with associated articles
  article: [
    {
      type: Schema.Types.ObjectId,
      ref: "article"
    },
    title {
      type: String,
      unique: true
    },
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Schema = mongoose.model("Schema", ScrapedData);

// Export the Schema model
module.exports = Schema;
