var express = require("express");
var request = require("request");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/posts", function (req, res) {
    db.post.findAll({
        include: [db.user],
        order: [
            ['createdAt', 'DESC']
        ]
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
        db.subpost.findAll({
            where: { postId: req.params.id },
            order: [
                ['createdAt', 'ASC']
            ]
        }).then(function (dbSubpost) {
            res.render("post", {
                comments:dbSubpost,
                dataValues:{
                    comment:dbPost[0].comment,
                    title:dbPost[0].title,
                    urlOriginal:dbPost[0].dataValues.urlOriginal,
                    url:dbPost[0].dataValues.url,
                    urlOriginalStill:dbPost[0].dataValues.urlOriginalStill,
                    urlStill:dbPost[0].dataValues.urlStill,
                    id:dbPost[0].dataValues.id
                }
            });
        });
    });
});


router.get("/user/:id", function (req, res) {
    db.post.findAll({
        where: { userId: req.params.id },
        include: [db.user],
        order: [
            ['createdAt', 'ASC']
          ]
    }).then(function (dbPost) {
        res.render("user", { 
            posts: dbPost,
            userName:dbPost[0].dataValues.user.firstName + ' ' + dbPost[0].dataValues.user.lastName,
            userId: dbPost[0].dataValues.userId
         });
    });
});

router.post("/search", function (req, res) {
    request("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + req.body.search, function (err, response, body) {
        var resultsArr = JSON.parse(body).data;
        var gifsArrObj = {
            posts:resultsArr
        };
        res.render("search", gifsArrObj);
    });
});

module.exports = router;