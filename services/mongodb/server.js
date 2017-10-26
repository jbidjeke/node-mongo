/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
//Database connection 
var uristring = 'mongodb://localhost/geoalertinfo';
var mongoOptions = { useMongoClient : true };

mongoose.Promise = global.Promise;
mongoose.connect(uristring, mongoOptions, function (err, res) {
    if (err) { 
        console.log('Error when connecting to: ' + uristring + '. ' + err);
    } 
    else {
        console.log('Successfully connected to: ' + uristring);
    }
});


//First let's create the Schemas:

// Category Schema
var Category = new Schema(
    {
        name:{ type : String}
    }
)
//Define Models
var CategoryModel = mongoose.model('Category', Category);



// Image Schema
var Image = new Schema(
    {
        url:{ type : String},alt:{ type : String }
    }
)
//Define Models
var ImageModel = mongoose.model('Image', Image);




// Geolocate Schema
var Geolocate = new Schema(
    {
        lat:{ type : Number},lng:{ type : Number }
    }
)
//Define Models
var GeolocateModel = mongoose.model('Geolocate', Geolocate);



// Gestion des annonces //
// Utility functions

// Advert Schema
var Advert = new Schema(
    {
        date:{ type: Date },price:{ type: Number},title:{ type: String },author:{ type: String },content:{ type: String },published:{ type: Number, required: true },updated_at:{ type: Date, default: Date.now },nb_applications:{ type: Number, required: true },slug:{ type: String },
        categories: [Category],
        geolocates: [Geolocate],
        images: [Image]
    }
)
var AdvertModel = mongoose.model('Advert', Advert);

var listAdverts = function() {
	var query = AdvertModel.find();
 
	query.exec(function(err, adverts) {
		if (err) {
			console.log(err);
		}
 
		console.log(adverts);
	});
}

// Lister les annonces //
var listAdvert = function(id) {
	if (id == null) {
		return ;
	}

	var query = AdvertModel.find({_id:id});
	//query.field('_id email');
 
	query.exec(function(err, adverts) {
		if (err) {
			console.log(err);
		}
 
		console.log(adverts);
	});
}

// Lister les annonces par utilisateur //
var listUserAdvert = function(user_id) {
	if (id == null) {
		return ;
	}

	var query = UserModel.find({_id:user_id});
	//query.field('_id email');
 
	query.exec(function(err, users) {
		if (err) {
			console.log(err);
		}
 
		console.log(users.adverts);
	});
}

var removeAdvert = function(advertId) {
	var query = AdvertModel.findOne({_id:userId});
 
	query.exec(function(err, advert) {
		if (err) {
			console.log(err);
			return ;
		}
 
		advert.remove();
	});
}

// Inserer insérer les annonces par utilisateur
var insertAdverts = function(userId, advert, images, geolocates, categories, callback) {
	UserModel.findOne({_id:userId}, function(err, user) {
		if (err) {
			console.log(err);
			return ;
		}
 
        var Advert = new AdvertModel(); 
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

// Fin gestion annonces //




// Gestion utilisateur //

// User Schema
var User = new Schema(
    {
        username:{ type: String },username_canonical:{ type: String },email:{ type: String },email_canonical:{ type: String },enabled:{ type: Number, required: true },salt:{ type: String },password:{ type: String },last_login:{ type: Date },locked:{ type: Number, required: true },expired:{ type: Number, required: true },expires_at:{ type: Date },confirmation_token:{ type: String },password_requested_at:{ type: Date },roles:{ type: String },credentials_expired:{ type: Number, required: true }, credentials_expire_at:{ type: Date },
        adverts: [Advert]
    }
)
var UserModel = mongoose.model('User', User);

var listUsers = function() {
	var query = UserModel.find();
 
	query.exec(function(err, users) {
		if (err) {
			console.log(err);
		}
 
		console.log(users);
	});
}

var listUser = function(id) {
	if (id == null) {
		return ;
	}

	var query = UserModel.find({_id:id});
	//query.field('_id email');
 
	query.exec(function(err, users) {
		if (err) {
			console.log(err);
		}
 
		console.log(users);
	});
}

var removeUser = function(userId) {
	var query = UserModel.findOne({_id:userId});
 
	query.exec(function(err, user) {
		if (err) {
			console.log(err);
			return ;
		}
 
		user.remove();
	});
}

// Inserer utilisateur
var insertUser = function(user, callback) {
	var User = new UserModel(); 
    User.username=user.username;
    User.username_canonical=user.username_canonical;
    User.email=user.email;
    User.email_canonical=user.email_canonical;
    User.enabled=user.enabled; 
    User.salt=user.salt;
    User.password=user.password;
    User.last_login = user.last_login;
    User.locked=user.locked;
    User.expired=user.expired;
    User.expires_at=user.expires_at;
    User.confirmation_token=user.confirmation_token;
    User.password_requested_at=user.password_requested_at;
    User.roles=user.roles;
    User.credentials_expired=user.credentials_expired;
    User.credentials_expire_at=user.credentials_expire_at;
	User.adverts = [];
 
	User.save(function(err) {
		if (err) {
			console.log(err);
			return null;
		}
 
		return callback(User._id);
	});
}

// Fin gestion utilisateur //
*/



// Parcours user pour Inserer Advert ...

// Execute script
/*listAdverts();*/
/*listUsers();*/
//Let's add some data 
/*insertUser({username:"jbidjeke",username_canonical:"jbidjeke",email:"jbidjeke@yahoo.fr",email_canonical:"jbidjeke@yahoo.fr",enabled:"1",salt:"jup4qzziqm8w0ws0w800kgs8k800kow",password:"xN9WoGNj1EZ81ddaE00wppaU750Y7ym2P\/22ITtO2L901ofJ9sWlyw==",last_login:null,locked:0,expired:0,expires_at:null,confirmation_token:null,password_requested_at:null,roles:"a:0:{}",credentials_expired:0,credentials_expire_at:null}, function(userId) {
	if (userId == null) {
		console.log("accountId is null");
		return ;
	}
});*/
//listUser('59d4f96e9db5f426bc0db40b');
//removeUser('59d4f96e9db5f426bc0db40b');();

/*
var category = new CategoryModel();
category.name = "<>";
var geolocate = new GeolocateModel();
geolocate.lat = "<>";
geolocate.lng = "<>";
var image = new ImageModel();
image.url = "<>";
image.alt = "<>";

insertAdverts('59d4f96e9db5f426bc0db40b',{date:"2015-11-04 17:06:06",price:"20.00",title:"cours informatiques",author:"donalson",content:"programmation avec langages opensources",published:"1",updated_at:null,nb_applications:"0",slug:"cours-informatiques"},[image],[geolocate],[category], function(){
		return ;   
});*/

/*listUserAdvert('59d4f96e9db5f426bc0db40b');*/

var advertRepository = require ('./repository/advertRepository');
new advertRepository().listAdverts();




