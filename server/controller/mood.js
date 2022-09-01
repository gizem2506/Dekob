const Mood = require("../models/mood");
const crypto = require("crypto");
const path = require("path");
//const fileUpload = require("express-fileupload");

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const express = require("express"),
  app = express(),
  fs = require("fs"),
  multer = require("multer"),
  mongoose = require("mongoose");

exports.aliasFourData = (req, res, next) => {
  req.query.limit = 4;
  next();
};

exports.getMoodsForCategory = async (req, res) => {
  try {
    const reqCategory = req.params.category;
    const moods = await Mood.find({ category: reqCategory });

    res.status(200).json({
      status: "success",
      results: moods.length,
      data: {
        moods,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getMoodForId = async (req, res) => {
  try {
    const moodId = req.params.id;
    const mood = await Mood.findById(moodId);

    res.status(200).json({
      status: "success",
      data: {
        mood,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "success",
      message: err.message,
    });
  }
};

exports.getAllMoods = async (req, res) => {
  try {
    const moods = await Mood.find().limit(req.query.limit);
    //console.log(moods);

    res.status(200).json({
      status: "success",
      results: moods.length,
      data: {
        moods,
      },
    });
    //fs.createWriteStream("uploads/").write(moods.img.data);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.getImageForName = (req, res) => {
  const takenPath = path.resolve(__dirname, "../uploads", req.params.name);
  res.sendFile(takenPath);
};

exports.addFileToDB = async (req, res) => {
  try {
    let imgList = [];
    let vidList = [];
    let audList = [];
    req.files.map((file) => {
      fs.readFileSync(file.path);

      //const takenPath = path.join(__dirname, "./uploads", file.filename);

      /*
      const takenPath = path.join(
        "http://localhost:5001/client/src/uploads/",
        file.filename
      );
      */

      const mimetype = file.mimetype.toString();

      if (mimetype.startsWith("image")) {
        var new_img = {
          id: file.filename,
          contentType: file.mimetype,
        };
        imgList.push(new_img);
      } else if (mimetype.startsWith("video")) {
        var new_vid = {
          id: file.filename,
          contentType: file.mimetype,
        };
        vidList.push(new_vid);
      } else if (mimetype.startsWith("audio")) {
        var new_aud = {
          id: file.filename,
          contentType: file.mimetype,
        };
        audList.push(new_aud);
      }
    });
    var final_file = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      img: imgList,
      video: vidList,
      audio: audList,
    };
    Mood.create(final_file, function (err, result) {
      if (err) {
        res.status(400).json({
          status: "failed",
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: "successful",
          result,
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};