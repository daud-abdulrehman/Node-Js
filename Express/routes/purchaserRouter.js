const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");

const registeredUsers = [];

router.post("/signUp", function (req, res) {
  console.log("============= req.body===== ", req.body);
  registeredUsers.push(req.body);
  res.send("user received");
});

router.post("/signIn", function (req, res) {
  console.log("============= req.body===== ", req.body);
  const result = registeredUsers.filter(
    (user) => 
      user.userName === req.body.userName && user.password === req.body.password
  );

  console.log("--------- matched user ------- ", result);
  if (result.length) {
    var token = jwt.sign(result[0], "shhhhh");
    res.send(token);
  } else {
    res.status(401).send("Authentication failed");
  }
});

router.get("/getOrders", function (req, res) {
  console.log("============= req.body===== ", req.headers.authorization);
  const token = req.headers.authorization;
  const user = jwt.verify(token, "shhhhh");
  console.log(" =========== viewing orders-------- ", user);
  res.send("okay");
});

router.patch("/addItemtoCart",function(req,res){
    console.log("add item to cart route")
})

router.post("/placeOrder",function(req,res){
    console.log("place order route")
})

router.get("/trackOrder",function(req,res){
    console.log("track order route")
})

router.get("/canCheckoutViaStripe",function(req,res){
    console.log("checkout via stripe route")
})

module.exports = router;
