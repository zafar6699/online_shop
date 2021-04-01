const express = require('express')
const router = express.Router();
const { Home, Login } = require("../controllers/indexController")

router.get("/", Home)
router.get("/login", Login)


module.exports = router