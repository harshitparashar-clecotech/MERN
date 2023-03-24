const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://harshitparashar:T7zGGi9g6BgDAXql@cluster0.5ewzmsy.mongodb.net/mern?retryWrites=true&w=majority";
const mongoDB = () => {
  mongoose
    .connect(mongoURL, { useNewURLParser: true })
    .catch((error) => console.log(error));
};

// const collection = mongoose.connection.db.("categorydataMern");
// collection.find({}).toArray(function (err, data) {
//   console.log(data); // it will print your collection data
// });

module.exports = mongoDB;
