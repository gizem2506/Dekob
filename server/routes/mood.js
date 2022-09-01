const express = require("express");
const moodController = require("../controller/mood");
const multer = require("multer");
const mongoose = require("mongoose");
const fs = require("fs");

const router = express.Router();
const Mood = require("../models/mood");
const { Router } = require("express");

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

router.route("/uploadphoto/:category").get(moodController.getMoodsForCategory);

router.route("/image/:name").get(moodController.getImageForName);
router.route("/").get(moodController.renderHtml);
router.route("/video").get(moodController.streamVideo);

router
  .route("/random-four")
  .get(moodController.aliasFourData, moodController.getAllMoods);

//router.route("/").get(moodController.getAllMoods);

module.exports = router;
