var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/posts", function (req, res) {
    res.render("posts", {
        posts: [{
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }, {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }, {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        },
        {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }, {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }, {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }, {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        },
        {
            postUrl: "post/1",
            imgUrl: "/assets/img/Bodie.jpg"
        },
        {
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }
        ]
    });
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/signup", function (req, res) {
    res.render("signup");
});

router.get("/post", function (req, res) {
    res.render("post", {
        post: "/assets/img/Bodie.jpg",
        comments: [{
            text: 'Hello this is the first comment'
        }, {
            text: 'Comment the second'
        }
        ]
    });
});

router.get("/user", function (req, res) {
    res.render("user", {
        posts: [{
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        },{
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        },{
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        },{
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        },{
            postUrl: "post/",
            imgUrl: "/assets/img/Bodie.jpg"
        }]
    });
});

module.exports = router;