
function userRepository (){
    
}

userRepository.prototype.listUsers = function() {
	var query = UserModel.find();
 
	query.exec(function(err, users) {
		if (err) {
			console.log(err);
		}
 
		console.log(users);
	});
}

userRepository.prototype.listUser = function(id) {
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

userRepository.prototype.removeUser = function(userId) {
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
userRepository.prototype.insertUser = function(user, callback) {
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


module.exports = userRepository; 



