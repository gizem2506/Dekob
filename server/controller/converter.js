const imageToBase64 = require("image-to-base64");
const Mood = require("../models/mood");
//or
//import imageToBase64 from 'image-to-base64/browser';

const fs = require("fs");
exports.convertBase64toImage = async (data, id) => {
  // base64 data to buffer
  var buffer = Buffer.from(data, "base64");
  // buffer to image
  fs.writeFileSync(`file_${id}.jpg`, buffer);
};

exports.convertImageToBase64 = async (file, callback) => {
  imageToBase64(file) // Path to the image
    .then((response) => {
      callback(response); // "cGF0aC90by9maWxlLmpwZw=="
    })
    .catch((error) => {
      console.log(error.message); // Logs an error if there was one
    });
};

///////////////////////////////////////////////////////////////////////////

var mongoose = require("mongoose");
var Grid = require("gridfs-stream");

// create or use an existing mongodb-native db instance.
// for this example we'll just create one:

//var db = mongoose.connection;

const conn = mongoose.createConnection("mongodb://localhost:27018/gridfs");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

//const conn = mongoose.connection;

let gfs;

exports.uploadVideo = async (req, res) => {};
