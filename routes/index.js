const express = require('express')
const router = express.Router();
const { Home } = require("../controllers/indexController")

router.get("/", Home)

module.exports = router
