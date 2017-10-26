function AdvertRepository (){
    var mongoose     =   require("../model/mongoose");
    
    var Advert = require('../model/advert');
    this.advertModel = new Advert(mongoose).doModel();
    
    var User = require('../model/user');
    this.userModel = new User(mongoose).doModel();
}

AdvertRepository.prototype.listAdverts = function() {
	var query = this.advertModel.find();
 
	query.exec(function(err, adverts) {
		if (err) {
			console.log(err);
		}
 
		console.log(adverts);
	});
}

/* Lister les annonces */
AdvertRepository.prototype.listAdvert = function(id) {
	if (id == null) {
		return ;
	}

	var query = this.advertModel.find({_id:id});
	//query.field('_id email');
 
	query.exec(function(err, adverts) {
		if (err) {
			console.log(err);
		}
 
		console.log(adverts);
	});
}

/* Lister les annonces par utilisateur */
AdvertRepository.prototype.listUserAdvert = function(user_id) {
	if (id == null) {
		return ;
	}

	var query = this.userModel.find({_id:user_id});
	//query.field('_id email');
 
	query.exec(function(err, users) {
		if (err) {
			console.log(err);
		}
 
		console.log(users.adverts);
	});
}

AdvertRepository.prototype.removeAdvert = function(advertId) {
	var query = this.advertModel.findOne({_id:userId});
 
	query.exec(function(err, advert) {
		if (err) {
			console.log(err);
			return ;
		}
 
		advert.remove();
	});
}

// Inserer insérer les annonces par utilisateur
AdvertRepository.prototype.insertAdverts = function(userId, advert, images, geolocates, categories, callback) {
	this.userModel.findOne({_id:userId}, function(err, user) {
		if (err) {
			console.log(err);
			return ;
		}
 
        var Advert = this.advertModel; 
        Advert.date=advert.date;
        Advert.price=advert.price;
        Advert.title=advert.title;
        Advert.author=advert.author;
        Advert.content=advert.content;
        Advert.published=advert.published;
        Advert.updated_at=advert.updated_at;
        Advert.nb_applications=advert.nb_applications;
        Advert.slug=advert.slug;
        
        Advert.images = images;
        Advert.geolocates = geolocates;
        Advert.categories = categories;
	 
        user.adverts.push(Advert);

		user.save(function(err2) {
			if (err2) {
				console.log(err2);
			}

			return callback();
		});
	});
}

module.exports = AdvertRepository; 

/* Fin gestion annonces */


