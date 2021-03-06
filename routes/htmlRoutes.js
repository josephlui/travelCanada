var db = require("../models");
// var path = require("path");

module.exports = function(app) {

  // index route
  app.get("/index", function(req, res){
    res.render("index", {});
  });

  // profile page
  app.get("/profile", function(req, res){
    res.render("profile", {});
  });

  app.get("/", function(req, res){
    res.render("login", {});
  });

  app.get("/profile/:id", function(req, res) {
    // var id = req.params.id;
    res.end();

  });

  //Load User's Profile
  app.get("/itinerary/:name/",function(req,res){
    db.Itinerary();
    res.end();
  });

  // Load Destinations
  app.get("/:city",function(req,res){
    res.end();
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
