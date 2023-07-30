const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");

const registeredAdmin = [];

router.post("/signIn", function (req, res) {
  console.log("============= req.body===== ", req.body);
  const result = registeredAdmin.filter(
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

router.get("/getProducts", function (req, res) {
  console.log("============= req.body===== ", req.headers.authorization);
  const token = req.headers.authorization;
  const user = jwt.verify(token, "shhhhh");
  console.log(" =========== viewing orders-------- ", user);
  res.send("okay");
});

router.get("/getSellers", function (req, res) {
    console.log("============= req.body===== ", req.headers.authorization);
    const token = req.headers.authorization;
    const user = jwt.verify(token, "shhhhh");
    console.log(" =========== viewing seller-------- ", user);
    res.send("okay");
  });
  
  router.get("/getPurchasers", function (req, res) {
    console.log("============= req.body===== ", req.headers.authorization);
    const token = req.headers.authorization;
    const user = jwt.verify(token, "shhhhh");
    console.log(" =========== viewing purchasers-------- ", user);
    res.send("okay");
  });
  
  router.get("/getOrders", function (req, res) {
    console.log("============= req.body===== ", req.headers.authorization);
    const token = req.headers.authorization;
    const user = jwt.verify(token, "shhhhh");
    console.log(" =========== viewing orders-------- ", user);
    res.send("okay");
  });
  
router.get("/performRestrictions",function(req,res){
    console.log("perform restrictions route")
})

module.exports = router;
