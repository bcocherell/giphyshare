var db = require("../models");

module.exports = function(app) {

  // get all followers for a particular userId
  app.get("/api/followers/:id", function(req, res) {
    db.follower.findAll({
      where: { userId: req.param.id },
      include: ["Followers"]
    }).then(function(dbFollower) {
      res.json(dbFollower);
    });
  });

  // add follower
  app.post("/api/followers", function(req, res) {
    db.follower.create(req.body).then(function(dbFollower) {
      res.json(dbFollower);
    });
  });
};
