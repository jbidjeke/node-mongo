
/* Model Image */
    
function imageModel (mongoose){
    this.image = require("../schema/image");
    this.mongoose = mongoose;   
}

imageModel.prototype.doModel = function(){
   var Image = new this.image(this.mongoose).doSchema();
   return this.mongoose.model('Image', Image);   
}

module.export = imageModel;
