const express = require("express");
const router = express();
const { Test } = require("../admin-service/admin.controller");

router.get("/test-route", Test); // Test route

module.exports = router;
