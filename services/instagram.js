var express       =    require("express"),  
    app           =    express(),
    instagram     =    require("./instagram/server"),
    lat           =    48;
    lng           =    7;
    
    
    app.get("/",function(req,res){
         res.charset = "utf-8";
         //res.set('latlng', lat.toString(16)+lng.toString(16));
         //Database
         new instagram(res, lat, lng).mediaSearch();
    });
 
    app.listen(3000);
    console.log("Serveur HTTP démarré sur le port 3000");
    