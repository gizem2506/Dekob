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

//const binary = mongoose.mongo.Binary;

/*
exports.getAllMoods = async (req, res, next) => {
  try {
    const moods = await Mood.find();

    moods.map((m) => {
      converter.convertBase64toImage(m.images, m._id);
    });

    res.status(200).json({
      status: "success",
      results: moods.length,
      data: {
        moods,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
*/

/*
exports.insertMood = async (req, res) => {
  var base64;
  await converter.convertImageToBase64(
    "image.jpg",
    (callback = (response) => {
      base64 = response;
    })
  );

  try {
    const newMood = await Mood.create({
      title: "yeni",
      category: "sdasds",
      images: base64,
    });

    res.status(201).json({
      status: "success",
      data: {
        mood: newMood,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
*/

exports.getMoodsForCategory = async (req, res) => {
  const reqCategory = req.params.category;
  const moods = await Mood.find({ category: reqCategory });

  /*
    moods.map((mood) => {
      mood.img.map((img) => {
        findImage(img.id, (callback = (file) => {}));
      });
    });
    */

  res.status(200).json({
    status: "success",
    results: moods.length,
    data: {
      moods,
    },
  });
};

exports.getAllMoods = async (req, res) => {
  try {
    /*
     const features = new APIFeatures(Mood.find(),req.query)
                    .filter()
                    .sort()
                    .limiting()
                    .paginate();
    */

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

exports.renderHtml = (req, res) => {
  res.sendFile(__dirname + "/index.html");
};

exports.addFileToDB = async (req, res) => {
  try {
    let imgList = [];
    req.files.map((file) => {
      fs.readFileSync(file.path);

      //const takenPath = path.join(__dirname, "./uploads", file.filename);

      /*
      const takenPath = path.join(
        "http://localhost:5001/client/src/uploads/",
        file.filename
      );
      */

      var new_img = {
        id: file.filename,
        contentType: file.mimetype,
      };

      imgList.push(new_img);
    });
    var final_img = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      img: imgList,
    };
    Mood.create(final_img, function (err, result) {
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

const findImage = (imgId, callback) => {
  fs.readdirSync(`${path.join(__dirname, "../../client/src/uploads")}`, {
    withFileTypes: true,
  }).map((file) => {
    if (file.name === imgId) {
      callback(file);
    }
  });
};
