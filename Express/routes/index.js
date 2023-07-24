const express = require('express')
const router = express.Router()
const userRouter = require("./userRoutes")
const adminRouter = require("adminRoutes.js")

router.route("/admin/")
