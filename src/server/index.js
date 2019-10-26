#!/usr/bin/env node
/* @flow */
/* eslint-disable strict */

"use strict";

//require("babel-register");

const express = require("express");
const os = require("os");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(3080, () => console.log("Listening on port 3080!"));

console.log(`Starting web server on ${process.pid}`); // eslint-disable-line
