 /*var url = require('url');
  var querystring = require('querystring'); */
 var express   =   require("express"), 
     app       =   express(), 
     fs        =   require('fs'),
     tweet     =   require("./services/tweet/server"),
     lat       =   48,
     lng       =   7,
     database      =    require("./services/database/server"),
     content   =   [];
 
/*
 app.get("/tweet",function(req,res){
         res.charset = "utf-8";
         var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ],
         result = new tweet().location(sanFrancisco);
         content.push(result);
           
         res.json(content);
         
 });
 
 */
 
 app.get("/",function(req,res){
      res.charset = "utf-8";
      //res.set('latlng', lat.toString(16)+lng.toString(16));
      // Load data from database
      var db = new database(res, lat, lng, 5000, "annonces", ""),
         result = db.handle();
      res.json(result);
 });

 app.listen(3000);
 console.log("Serveur HTTP demarrer sur le port 3000");  
 
 