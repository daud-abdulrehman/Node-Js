const express = require('express');
const app = express();
const PORT = 3000;
const routes = require("./routes")
var jwt = require("jsonwebtoken");

// Single routing

 //user = ["daud1","umar1","mansoor1"]
 //admin = ["daud2","umar2","mansoor2"]

 const middleware1 = (req,res,next)=>{
    console.log("middleware1")
    req.params.id+=1

    next()
}
app.use(express.json())

const registeredUsers = [];
const registeredAdmins = []
app.post("/users/signUp", function (req, res) {
    console.log("============= req.body===== ", req.body);
    registeredUsers.push(req.body);
    res.send("user received");
});
  
app.post("users/signIn", function (req, res) {
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


  app.post("/admin/signUp", function (req, res) {
    console.log("============= req.body===== ", req.body);
    registeredAdmins.push(req.body);
    res.send("admin received");
});
  
app.post("/admin/signIn", function (req, res) {
    console.log("============= req.body===== ", req.body);
    const result = registeredAdmins.filter(
      (user) =>
        user.userName === req.body.userName && user.password === req.body.password
    );
  
    console.log("--------- matched admin ------- ", result);
    if (result.length) {
      var token = jwt.sign(result[0], "shhhhh");
      res.send(token);
    } else {
      res.status(401).send("Authentication failed");
    }
});

app.get("/admin/getUsers", function (req, res) {
    console.log("============= req.body===== ", req.headers.authorization);
    const token = req.headers.authorization;
    const user = jwt.verify(token, "shhhhh");
    console.log(" =========== requesting user-------- ", user);
    res.send(registeredUsers);
  });
  



//app.use(middleware1)
app.use(routes);
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});