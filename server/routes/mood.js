const express = require("express");
const moodController = require("../controller/mood");
const multer = require("multer");
const mongoose = require("mongoose");
const fs = require("fs");
const conn = mongoose.createConnection("mongodb://localhost:27018/gridfs");
const { GridFsStorage } = require("multer-gridfs-storage");
var Grid = require("gridfs-stream");

const router = express.Router();
const Mood = require("../models/mood");

//Multer Storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const type = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${type}`);
  },
});

var upload = multer({
  storage: storage,
});

router
  .route("/uploadphoto")
  .get(moodController.getAllMoods)
  .post(upload.array("files"), moodController.addFileToDB);

//router.route("/").get(moodController.getAllMoods);

/*

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const type = file.mimetype.split("/")[1];
    cb(null, `file.fieldname-${Date.now()}.${type}`);
  },
});

var upload = multer({ storage: storage });

router.route("/uploadphoto").post(upload.single("file"), async (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var buffer = Buffer.from(img);
  //var encode_img = img.toString("base64");
  var final_img = {
    title: req.body.title,
    category: req.body.category,
    img: {
      data: buffer,
      contentType: req.file.mimetype,
    },
  };
  Mood.create(final_img, function (err, result) {
    if (err) {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    } else {
      res.status(200).json({
        result,
      });
    }
  });
});
*/

module.exports = router;
