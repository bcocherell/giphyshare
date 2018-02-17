var db = require("../models");

module.exports = function(app) {

  // get all users
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // get user info by username
  app.get("/api/users/:id", function(req, res) {
    db.user.findOne({
      where: {id: req.params.id}
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // create new user
  app.post("/api/users", function(req, res) {
    db.user.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // update user by id
  app.put("/api/users/:id", function(req, res) {
    db.user.update(req.body,{
      where: {id: req.params.id}
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
