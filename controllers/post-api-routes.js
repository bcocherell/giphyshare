var db = require("../models");

module.exports = function(app) {

  // insert post
  app.post("/api/posts", function(req, res) {
    db.post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
