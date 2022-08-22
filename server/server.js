const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 5001;

dotenv.config({ path: "./.env" });
/*
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
*/

const DB = process.env.DATABASE_LOCAL;

const conn = mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("ERROR: ", err.message);
  });

app.listen(port, () => {
  console.log(`Listening port on ${port}`);
});

module.exports = conn;
