var express       =    require("express"),  
    app           =    express(),
    tweet         =    require("./tweet/server"),
    lat           =    48;
    lng           =    7;
    
    
    app.get("/",function(req,res){
         res.charset = "utf-8";
         var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];
         new tweet(res, lat, lng).location(sanFrancisco);
                       
    });
 
    app.listen(3000);
    console.log("Serveur HTTP démarré sur le port 3000");
    