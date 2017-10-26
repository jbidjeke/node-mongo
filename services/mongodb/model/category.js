
/* Model category */

function categoryModel (mongoose){
    this.category     = require("../schema/category");
    this.mongoose = mongoose;   
}

categoryModel.prototype.doModel = function(){
   var Category = new this.category(this.mongoose).doSchema();
   return this.mongoose.model('Category', Category);   
}

module.export = categoryModel;
