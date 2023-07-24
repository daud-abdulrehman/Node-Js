const express = require('express')
const router = express.Router()
const userRouter = require("./userRouter")
const adminRouter = require("./adminRouter")

router.use("/user/",userRouter);
router.use("/admin/", adminRouter);

//users = ["daud1","umar1","mansoor1"]
//admin = ["daud2","umar2","mansoor2"]

module.exports = router
