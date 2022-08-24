const mongoose = require("mongoose");
const moodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A mood must have a title"],
  },
  category: {
    type: String,
    required: [true, "A mood must have a category"],
  },
  content: String,
  img: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

const Mood = mongoose.model("Mood", moodSchema);
module.exports = Mood;
