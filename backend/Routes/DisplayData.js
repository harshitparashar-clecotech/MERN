const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send(global_food_Items);
   
  } catch (error) {
    console.log(error.message)
    res.send("Server Error")
  }
});

module.exports = router; 