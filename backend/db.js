const mongoose = require("mongoose");

const mongoNewUrl =
  "mongodb://harshitparashar:T7zGGi9g6BgDAXql@ac-yzx4gch-shard-00-00.5ewzmsy.mongodb.net:27017,ac-yzx4gch-shard-00-01.5ewzmsy.mongodb.net:27017,ac-yzx4gch-shard-00-02.5ewzmsy.mongodb.net:27017/mern?ssl=true&replicaSet=atlas-g9w1h8-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoNewUrl, { useNewURLParser: true });

  const dbc = mongoose.connection;

  const getone = async () => {
    const dataMern = await dbc.collection("dataMern").find({}).toArray();
    global_food_Items = dataMern;

  
  };

  getone();
};

module.exports = mongoDB;
