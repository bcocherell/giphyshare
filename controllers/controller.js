var express = require("express");
var request = require("request");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/posts", function (req, res) {
    res.render("posts", {
        posts: [{
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        },
        {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        },
        {
            postUrl: "post/1",
            'images.fixed_height.url': "/assets/img/Bodie.jpg"
        },
        {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
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
        images: {
            fixed_height_still: {
                url: "/assets/img/Bodie.jpg"
            },
            fixed_height: {
                url: "/assets/img/Bodie.jpg"
            }
        },
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
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }, {
            postUrl: "post/",
            images: {
                fixed_height_still: {
                    url: "/assets/img/Bodie.jpg"
                },
                fixed_height: {
                    url: "/assets/img/Bodie.jpg"
                }
            }
        }]
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