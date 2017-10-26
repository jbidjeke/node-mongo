//  Database  
 function database (res, lat, lng, distance, c, q){
     var mysql     =    require('mysql');   
     this.pool     =    mysql.createPool({
         connectionLimit : 100, //important
         host     : 'localhost',
         user     : 'root',
         password : 'igsi',
         database : 'lrgb_adverts',
         debug    :  false
     });         
    
    /*var pool      =    mysql.createPool({
         connectionLimit : 100, //important
         host     : 'lrgb.myd.infomaniak.com',
         user     : 'lrgb_jbidjeke',
         password : 'infor19mation79',
         database : 'lrgb_adverts',
         debug    :  false
     }); */
     
     this.domain   = "http://lrgbatrs.preview.sharedbox.com/api";
     /*this.res      = res;*/
     this.lat      = lat;
     this.lng      = lng;
     this.distance = distance;
     this.c        = c;
     this.q        = q;
 }
 
 
 database.prototype.handle  = function (/*sql*/) {
     var content = [];
     this.pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }   
 
         console.log('connected as id ' + connection.threadId  );

         connection.query(/*sql*/ this.doSql(),function(err,rows){
             connection.release();
             
             if(!err) {
                 rows.forEach(function(obj) {
                    content.push ({'id':obj.id,
                                   'title':obj.title,
                                   'link':obj.email,
                                   'price':obj.price,
                                   'date':obj.date,
                                   'category':obj.name,
                                   'region':"",
                                   'city':"",
                                   'thumbnail_link':this.domain+"/symfony/web/uploads/img/"+obj.id+"."+obj.url,
                                   'professionnal':"",
                                   'urgent':"",
                                   'lat':obj.lat,
                                   'lng':obj.lng,
                                   'location':null,
                                   'describe':obj.content+" << "+obj.author+", "+obj.email+" >> " }); 
                 }); 
             
             }           
         });
 
         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
   });
   
   return content;
 }  
 
 database.prototype.doSql = function (){
         this.formule = "6366*acos(cos(radians("+this.lat+"))*cos(radians(`lat`))*cos(radians(`lng`) - radians("+this.lng+"))+sin(radians("+this.lat+"))*sin(radians(`lat`)))";
         this.sql = "SELECT * FROM `Advert` INNER JOIN `Image` ON `Advert`.`image_id` = `Image`.`id` INNER JOIN `Geolocate` ON `Advert`.`geolocate_id` = `Geolocate`.`id` INNER JOIN `advert_category` ON `Advert`.`id` = `advert_category`.`advert_id` INNER JOIN `Category` ON `Category`.`id` = `advert_category`.`category_id`  ";   
         
         if (this.c != "annonces")
           this.sql  +=" AND `Category`.`name` = "+this.c;
         this.sql  +=" WHERE "+this.formule+" <= "+this.distance+"  \n";
         if (this.q != "")
            this.sql +=" AND (`Advert`.`title` LIKE '%"+this.q+"%' OR `Advert`.`content` LIKE '%"+this.q+"%') \n";
         this.sql += " ORDER BY `Advert`.`date` ASC";  
         
         return this.sql;        
 }
 
 
 /*var express   =    require("express"),  
    app       =    express();
    lat           =    48;
    lng           =    7;
    
    
    app.get("/",function(req,res){
         res.charset = "utf-8";
         //res.set('latlng', lat.toString(16)+lng.toString(16));
         var db = new Database(res, lat, lng, 5000, "annonces", ""),
            result = db.handle();
         res.json(result);
    });
 
    app.listen(3000);
    console.log("Serveur HTTP d�marr� sur le port 3000");  */
 
 module.exports = database;