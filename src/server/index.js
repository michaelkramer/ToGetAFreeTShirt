#!/usr/bin/env node
/* @flow */
/* eslint-disable strict */

"use strict";

//require("babel-register");
const glob = require("glob");
const express = require("express");
const assert = require("assert");
const app = express();

app.use(express.static("dist"));

glob("server/controllers/**/*.js", (err, files) => {
  files.map((file) => {
    // $FlowIgnore
    require(file).routes(server); // eslint-disable-line
  });
});

app.listen(3080, () => console.log("Listening on port 3080!"));

console.log(`Starting web server on ${process.pid}`); // eslint-disable-line
