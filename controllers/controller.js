var express = require("express");
var request = require("request");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/posts", function (req, res) {
    db.post.findAll({
        include: [db.user]
    }).then(function (postsArr) {
        var posts = {
            posts: postsArr
        };
        res.render("posts", posts);
    });
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/signup", function (req, res) {
    res.render("signup");
});

router.get("/post/:id", function (req, res) {
    db.post.findAll({
        include: [db.subpost],
        where: { id: req.params.id }
    }).then(function (dbPost) {
        res.render("post", dbPost[0]);
    });
});

router.get("/user/:id", function (req, res) {
    db.post.findAll({
        where: { userId: req.params.id }
    }).then(function (dbPost) {
        res.render("user", {posts:dbPost});
    });
});

router.post("/search", function (req, res) {
    request("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + req.body.search, function (err, response, body) {
        var resultsArr = JSON.parse(body).data;
        var gifsArrObj = {
            resultsArr:
                [
                    { data: resultsArr.slice(0, 6) },
                    { data: resultsArr.slice(6, 12) },
                    { data: resultsArr.slice(12, 18) },
                    { data: resultsArr.slice(18, 24) },
                ]
        };
        res.render("search", gifsArrObj);
    });
});

module.exports = router;