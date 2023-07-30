const express = require('express')
const router = express.Router()
const userRouter = require("./userRouter")
const adminRouter = require("./adminRouter")
const purchaserRouter = require("./purchaserRouter")
const sellerRouter = require("./sellerRouter")

router.route("/admin/")
router.use("/user/",userRouter);
router.use("/admin/", adminRouter);
router.use("/purchaser/",purchaserRouter)
router.use("/seller/",sellerRouter)



//users = ["daud1","umar1","mansoor1"]
//admin = ["daud2","umar2","mansoor2"]

module.exports = router