const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

router.post("/login", controller.login);
router.get("/logout", controller.logout);

module.exports = router;
