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

const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
var clients = [];
var messages = [];
io.on("connection", (client) => {
  clients.push(client);
  console.log("new connection");
  client.emit("message-list", messages.slice(messages.length - 12, 12));
  client.on("event", (data) => {
    //console.log(client.emit("event", data));
    var date = new Date();
    data.time = date.getHours() + ":" + date.getMinutes();
    clients.map((client) => client.emit("event", data));
    messages.push(data);
    console.log(data);
  });
  client.on("disconnect", (client) => {
    /* … */
    console.log("disconnect");
    clients = clients.filter((c) => c.id !== client.id);
  });
});
server.listen(5002);

module.exports = app;
