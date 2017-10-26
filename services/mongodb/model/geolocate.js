/* Model Geolocate */
    
function geolocateModel (mongoose){
    this.geolocate = =   require("../schema/geolocate");
    this.mongoose = mongoose;   
}

geolocateModel.prototype.doModel = function(){
   var Geolocate = new this.geolocate(this.mongoose).doSchema();
   return this.mongoose.model('Geolocate', Geolocate);   
}

module.export = geolocateModel;