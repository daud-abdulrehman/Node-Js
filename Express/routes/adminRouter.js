const express = require('express')
const router = express.Router();
 
router.get('/getAdmin/:id', function (req, res) {
    res.send("Admin get route")
})

router.post('/createAdmin/:id', function (req, res) {
    res.send("Admin create route")

})

router.delete('/deleteAdmin/:id', function (req, res) {
    res.send("Admin delete route")

})

module.exports = router


