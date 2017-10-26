function advertModel (mongoose){
    this.advert       =   require("../schema/advert");
    this.mongoose = mongoose;   
}

advertModel.prototype.doModel = function(){
   var Advert = new this.advert (this.mongoose).doSchema();
   return this.mongoose.model('Advert', Advert);   
}

module.export = advertModel;
