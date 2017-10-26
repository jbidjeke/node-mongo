//  Database  
 function Database (){
     var mysql     =    require('mysql');   
     this.pool     =    mysql.createPool({
         connectionLimit : 100, //important
         host     : 'localhost',
         user     : 'root',
         password : '',
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
     
     this.domain  = "http://lrgbatrs.preview.sharedbox.com/api";
 }
 
 
 Database.prototype.handle  = function (req, res, sql) {
     this.pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }   
 
         console.log('connected as id ' + connection.threadId  );

         connection.query(sql,function(err,rows){
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
                    //console.log(channel);
                 });
                
             }           
         });
 
         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
   });
 }  
 
 Database.prototype.doSql = function (lat, lng, distance, c, q){
         this.formule = "6366*acos(cos(radians("+lat+"))*cos(radians(`lat`))*cos(radians(`lng`) - radians("+lng+"))+sin(radians("+lat+"))*sin(radians(`lat`)))";
         this.sql = "SELECT * FROM `Advert` INNER JOIN `Image` ON `Advert`.`image_id` = `Image`.`id` INNER JOIN `Geolocate` ON `Advert`.`geolocate_id` = `Geolocate`.`id` INNER JOIN `advert_category` ON `Advert`.`id` = `advert_category`.`advert_id` INNER JOIN `Category` ON `Category`.`id` = `advert_category`.`category_id`  ";   
         
         if (c != "annonces")
           this.sql  +=" AND `Category`.`name` = "+c;
         this.sql  +=" WHERE "+this.formule+" <= "+distance+"  \n";
         if (q != "")
            this.sql +=" AND (`Advert`.`title` LIKE '%"+q+"%' OR `Advert`.`content` LIKE '%"+q+"%') \n";
         this.sql += " ORDER BY `Advert`.`date` ASC";  
         
         return this.sql;        
 }
 
 module.exports = Database;