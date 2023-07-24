const express = require('express')
const router = express.Router();
 
router.get('/getUser/:id', function (req, res) {
    console.log("user Router Working");
    res.send("get user route");
})

router.patch('/updateUser/:id', function (req, res) {
    console.log("user Router Working");
    res.send("edit user route");
})

module.exports = router