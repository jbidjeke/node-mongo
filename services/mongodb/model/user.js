
/* Model utilisateur */

function userModel (mongoose){
    this.user     = require("../schema/user");
    this.mongoose = mongoose;   
}

userModel.prototype.doModel = function(){
   var User = new this.user(this.mongoose).doSchema();
   return this.mongoose.model('User', User);   
}

module.export = userModel;
