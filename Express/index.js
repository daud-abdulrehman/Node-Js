const express = require('express');
const app = express();
const PORT = 3000;
const routes = require("./routes")
 
// Single routing

 //user = ["daud1","umar1","mansoor1"]
 //admin = ["daud2","umar2","mansoor2"]

app.use(routes);
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});



