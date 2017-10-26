
    /* TWEET */
    function Tweet (res, lat, lng){
       var Twit = require('twit'); 
       this.T = new Twit({
          consumer_key:         'WSyYzXA3TdwuIYYnTK44PfTpE',
          consumer_secret:      'GCmTtE7OItkgPpX6ZQy4r00bNCXi1gUQOgWMrEESHTGJWpIExU',
          access_token:         '50957455-L96Z3nJLYeGxCMKNs7edBCHloAzGpQkHJwJWD7ETk',
          access_token_secret:  'fq3t8rlENvsNzKrUhLXEI6xP8AUVzkZ8dl82sSGHLuzcY',
          timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        })
        this.res = res;
        this.lat = lat;
        this.lng = lng;
 
    }
    
    /** https://github.com/ttezel/twit **/
    Tweet.prototype.post = function (s){ 
      var res = this.res;  
      //  tweet 'hello world!'
      this.T.post('statuses/update', { status: s }, function(err, data, response) {
        res.json(data);
      })
      
      return content;
    }
    

    Tweet.prototype.search = function (query, c){    
      var res = this.res;
      // search twitter for all tweets containing the word 'banana' since July 11, 2011
      this.T.get('search/tweets', { q: query, count: c }, function(err, data, response) {
        res.json(data);
      })
      return content;
    }
                                    

    Tweet.prototype.location = function (location){ 
      var res = this.res; 
      // filter the public stream by the latitude/longitude bounded box of San Francisco
      var stream = this.T.stream('statuses/filter', { locations: location })
      stream.on('tweet', function (data) {
         res.json(data);
      })
    }
    
    
    
    
    /*var express   =    require("express"),  
    app           =    express(),
    lat           =    48,
    lng           =    7;
    
    
    app.get("/",function(req,res){
         res.charset = "utf-8";
         //res.set('latlng', lat.toString(16)+lng.toString(16));
         var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ],
         Object = new Tweet(res, lat, lng).location(sanFrancisco);
    });
 
    app.listen(3000);
    console.log("Serveur HTTP démarré sur le port 3000"); */ 
    
    module.exports = Tweet; 
 
 