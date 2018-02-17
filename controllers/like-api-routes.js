var db = require("../models");

module.exports = function(app) {

  // get all likes for particular postId
  app.get("/api/likes/:id", function(req, res) {
    db.like.findAll({
      where: { postId: req.params.id }
    }).then(function(dbLike) {
      res.json(dbLike);
    });
  });

  // insert like
  app.post("/api/likes", function(req, res) {
    db.like.create(req.body).then(function(dbLike) {
      res.json(dbLike);
    });
  });
};
