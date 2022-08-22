const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Mood = require("./models/mood");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
//const fileUpload = require("express-file-upload");
const app = express();

const moodRoutes = require("./routes/mood");

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//app.use(fileUpload());
app.use("/api/v1/moods", moodRoutes);

module.exports = app;
