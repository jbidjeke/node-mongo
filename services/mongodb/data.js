

/*var db = connect("geoalertinfo");*/
/*db.user.insert({"id":"16","username":"jbidjeke","username_canonical":"jbidjeke","email":"jbidjeke@yahoo.fr","email_canonical":"jbidjeke@yahoo.fr","enabled":"1","salt":"jup4qzziqm8w0ws0w800kgs8k800kow","password":"xN9WoGNj1EZ81ddaE00wppaU750Y7ym2P\/22ITtO2L901ofJ9sWlyw==","last_login":null,"locked":"0","expired":"0","expires_at":null,"confirmation_token":null,"password_requested_at":null,"roles":"a:0:{}","credentials_expired":"0","credentials_expire_at":null});*/
/*db.advert.insert({"id":"14","image_id":"14","geolocate_id":"14","user_id":"16","date":"2015-11-04 17:06:06","price":"20.00","title":"cours informatiques","author":"donalson","content":"programmation avec langages opensources","published":"1","updated_at":null,"nb_applications":"0","slug":"cours-informatiques"});*/
/*db.advert_category.insert({"advert_id":"14","category_id":"13"});*/
/*var categories = [{"id":"2","name":"Voitures"}, {"id":"3","name":"Motos"}, {"id":"4","name":"Nautisme"}, {"id":"5","name":"Ventes immobilieres"}, {"id":"6","name":"Locations"}, {"id":"7","name":"Colocations"}, {"id":"8","name":"Locations de vacances"}, {"id":"9","name":"Bureaux Commerces"}, {"id":"10","name":"Maisons"}, {"id":"11","name":"Loisirs"}, {"id":"12","name":"Materiel Professionnel"}, {"id":"13","name":"Emploi Services"}, {"id":"14","name":"Media"}];
categories.forEach(function(element) {
  db.category.insert(element);
  print(element.name);
});
*/
/*db.geolocate.insert({"id":"14","lat":"48.449081","lng":"6.738028999999983"});*/
/*var images = [{"id":"11","url":"jpeg","alt":"logo_opensource.jpg"}, {"id":"12","url":"jpeg","alt":"logo_opensource.jpg"}, {"id":"13","url":"jpeg","alt":"logo_opensource.jpg"}, {"id":"14","url":"jpeg","alt":"logo_opensource.jpg"}];
images.forEach(function(element) {
  db.image.insert(element);

});*/

/*advert : {
    price      : issue.price,
    title      : issue.title,
    author     : issue.author,
    user       : {
       email     : issue.link,
    },
    content    : issue.describe,
    itineraire : {
       departure  : issue.departure,
       arrival    : issue.arrival,
       time       : issue.time_itineraire,
       date       : issue.date_itineraire
    },
    image      : null,
    categories : issue.category
}
*/

/*var adverts = db.advert.find();
printjson(adverts);*/
/*while(adverts.hasNext()){
    var advert = adverts.next;
    //var user = db.user.findOne({"id":advert.user_id});
    printjson(advert.title);
    //print(user.email);
    
}*/

/*var findAdverts = function(db, callback) {
   var cursor =db.collection('advert').find( );
   cursor.each(function(err, data) {
      assert.equal(err, null);
      if (data != null) {
          console.dir(data.id);
        //recuperer les informations de la geolocalisation 
        var locations = db.collection('geolocate').find({'id':data.id}); 
        console.dir(locations);
      } else {
         console.log(data);
         callback();
      }
   });
};

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/geoalertinfo';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findAdverts(db, function() {
      db.close();
  });
});
*/
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/geoalertinfo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection('advert').aggregate([
    { "$lookup":
       {
         from: 'geolocate',
         localField: 'id',
         foreignField: 'id',
         as: 'lat'
       }
     }
    ], function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
*/
/*var mongoose = require ("mongoose");
//console.log(" Mongoose version :"+ mongoose.version);
mongoose.createConnection("mongodb://localhost:/geoalertinfo");
var geolocateSchema = mongoose.Schema({
    id:Number,
    lat:Number,
    lng:Number
});

var Geolocate = mongoose.model("Geolocate", geolocateSchema);
Geolocate.find({
    "id": 14
}, function(err, geolocates){
    if (err)
        return console.error(err);
    console.log("test");
});
*/

/*mongoose.connection.on("error", function(){
    console.log("Erreur de connexion à la base de données")
});
mongoose.connection.on("open", function(){
    console.log("Connexion réussie à la base de données")
});*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});