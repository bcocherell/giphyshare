var db = require("../models");

module.exports = function(app) {

  // get all public posts, includes user info
  app.get("/api/posts", function(req, res) {
    db.post.findAll({
      include: [db.user],
      order: [
        [db.post, 'createdAt', 'DESC']
      ]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // get all user post for particular userId
  app.get("/api/posts/:id", function(req, res) {
    db.post.findAll({
      where: { userId: req.params.id },
      order: [
        [db.post, 'createdAt', 'DESC']
      ]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // get post by postId, includes subpost data
  app.get("/api/post/:id", function(req, res) {
    db.post.findAll({
      include: [db.subpost],
      where: { id: req.params.id }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // insert post
  app.post("/api/posts", function(req, res) {
    db.post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
