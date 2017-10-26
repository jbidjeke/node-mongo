

/* Schema User */

funtion User (mongoose){
    this.advert     =   require("./advert");
    this.schema = mongoose.Schema;  
}

User.prototype.doSchema = funtion(){
    var Advert = new this.advert (this.mongoose).doSchema();
    // User Schema
    return new this.schema(
        {
            username:{ type: String },username_canonical:{ type: String },email:{ type: String },email_canonical:{ type: String },enabled:{ type: Number, required: true },salt:{ type: String },password:{ type: String },last_login:{ type: Date },locked:{ type: Number, required: true },expired:{ type: Number, required: true },expires_at:{ type: Date },confirmation_token:{ type: String },password_requested_at:{ type: Date },roles:{ type: String },credentials_expired:{ type: Number, required: true }, credentials_expire_at:{ type: Date },
            adverts: [Advert]
        }
    )
    
}

module.export = User;
