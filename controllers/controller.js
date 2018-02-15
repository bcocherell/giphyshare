var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/posts", function(req, res) {
    res.render("posts");
});

router.get("/post", function(req, res) {
    res.render("post");
});


module.exports = router;
