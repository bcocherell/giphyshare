var db = require("../models");

module.exports = function(app) {

  // get all subposts for particular postId
  app.get("/api/subposts/:id", function(req, res) {
    db.subpost.findAll({
      where: { postId: req.params.id },
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function(dbSubpost) {
      res.json(dbSubpost);
    });
  });

  // insert subpost
  app.post("/api/subposts", function(req, res) {
    db.subpost.create(req.body).then(function(dbSubpost) {
      res.json(dbSubpost);
    });
  });
};
