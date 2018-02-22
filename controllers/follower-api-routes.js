var db = require("../models");

module.exports = function(app) {

  // add follower
  app.post("/api/followers", function(req, res) {
    db.follower.create(req.body).then(function(dbFollower) {
      res.json(dbFollower);
    });
  });
};
