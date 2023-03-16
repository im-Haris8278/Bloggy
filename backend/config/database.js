const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log("Connection to MongoDB Successful");
    })
    .catch((error) => {
      console.log(`${error} did not Connect.`);
    });
};

module.exports = connectDatabase;
