// @flow
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const _ = require("lodash");

// Connection URL
const url = "mongodb://prd-win-sql-01.ad.rls2000.com:27017";
// Use connect method to connect to the server
MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, db) => {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    //insertDocuments(db, function() {
    findDocuments(db, function(results) {
      _.each(results, (r) => {
        console.log("==> r.homepage", JSON.stringify(r.homepage));
      });
      db.close();
    });
    //});
  }
);
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.db("admin").collection("siteLayout");
  // Find some documents
  collection
    .find({ folderName: "template10.rlsplatform.comrs" })
    .toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      // console.log(docs[0].homepage);
      callback(docs);
    });
};
