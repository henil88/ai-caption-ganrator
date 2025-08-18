const mongoose = require("mongoose");

function connectTODb() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("db has been connected succesfully");
    })
    .catch((err) => {
      console.error("error to connect db", err);
    });
}

module.exports = connectTODb;
