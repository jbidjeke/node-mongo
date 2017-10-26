
    /* INSTAGRAM */
    function Instagram (res, lat, lng){
       this.instagram_node_lib  =  require('instagram-node-lib');
       this.instagram_node_lib.set('client_id', '509833854a7744ef83f76ccffa357778');
       this.instagram_node_lib.set('client_secret', '479c5d832050485eace0b6cf6dfaa014');
       this.lat = lat;
       this.lng = lng;
       this.res = res;
    }
    
    /** https://github.com/mckelvey/instagram-node-lib **/
    Instagram.prototype.tagsInfo = function (tag){
        var res = this.res; 
        this.instagram_node_lib.tags.info({
            name: tag,
            complete: function(data){
               res.json(data);
          }
        });
    }
    
    Instagram.prototype.locationsSearch = function (){ 
        var res = this.res;
        this.instagram_node_lib.locations.search({ lat: this.lat, lng: this.lng, complete: function(data){
            res.json(data);
          } 
        });
    }
    
    Instagram.prototype.mediaSearch = function (){
          var res = this.res; 
          this.instagram_node_lib.media.search({ lat: this.lat, lng: this.lng, complete: function(data){
            res.json(data);
            // Implémenter un traitement de sauvegarde de données avec res.get('latlng') comme nom de fichier
          }
        });
    }
    
    
    /*var express   =    require("express"),  
    app           =    express(),
    lat           =    48;
    lng           =    7;
    
    
    app.get("/",function(req,res){
         res.charset = "utf-8";
         res.set('latlng', lat.toString(16)+lng.toString(16));
         //Database
         var Object = new Instagram(res, lat, lng);
         Object.mediaSearch();
    });
 
    app.listen(3000);
    console.log("Serveur HTTP démarré sur le port 3000");*/ 
    
       
    
    module.export = Instagram;
 
 