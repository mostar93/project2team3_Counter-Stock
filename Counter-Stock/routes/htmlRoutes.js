var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Character.findAll({}).then(function(dbCharacter) {
      res.render("index", {
        msg: "Welcome!",
        username: dbCharacter.username,
        stockChoice: dbCharacter.stockChoice
        // examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/characters/:id", function(req, res) {
    db.Character.findOne({ where: { id: req.params.id } }).then(function(dbCharacter) {
      res.render("characters", {
        username: dbCharacter.username,
        stockChoice: dbCharacter.stockChoice
      });
    });
  });

  app.get("/characters", function(req, res) {
    db.Character.findAll({}).then(function(dbCharacter) {
      res.render("characters", {
        username: dbCharacter.username
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
