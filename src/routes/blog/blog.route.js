const express = require("express");
const controllerBlog = require("../../controllers/blog/blog.controller");

const router = express.Router();

router.post("/add", controllerBlog.addBlog);

module.exports = router;
