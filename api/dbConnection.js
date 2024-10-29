const mongoose = require("mongoose");

const uri = "mongodb+srv://kashishkesharwani24:Kashish24@cluster0.r3ndc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
