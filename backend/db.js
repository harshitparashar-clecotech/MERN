const mongoose = require("mongoose");
// const mongoURL =
//   "mongodb+srv://harshitparashar:T7zGGi9g6BgDAXql@cluster0.5ewzmsy.mongodb.net/mern?retryWrites=true&w=majority";

const mongoNewUrl = "mongodb://harshitparashar:T7zGGi9g6BgDAXql@ac-yzx4gch-shard-00-00.5ewzmsy.mongodb.net:27017,ac-yzx4gch-shard-00-01.5ewzmsy.mongodb.net:27017,ac-yzx4gch-shard-00-02.5ewzmsy.mongodb.net:27017/mern?ssl=true&replicaSet=atlas-g9w1h8-shard-0&authSource=admin&retryWrites=true&w=majority"
  const mongoDB = () => {
  mongoose
    .connect(mongoNewUrl, { useNewURLParser: true })
    .catch((error) => console.log(error));
};

// const collection = mongoose.connection.db.("categorydataMern");
// collection.find({}).toArray(function (err, data) {
//   console.log(data); // it will print your collection data
// });

module.exports = mongoDB;
