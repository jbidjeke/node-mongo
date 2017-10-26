
/* Schema Category */

funtion Category (mongoose){
    this.schema = mongoose.Schema;  
}

Category.prototype.doSchema = funtion(){
    // Geolocate Schema
    return new this.schema(
        {
            name:{ type : String}
        }
    )
}

module.export = Category;