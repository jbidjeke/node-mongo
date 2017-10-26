

/* Schema Image */

funtion Image (mongoose){
    this.schema = mongoose.Schema;  
}

Image.prototype.doSchema = funtion(){
    // Geolocate Schema
    return new this.schema(
        {
            lat:{ type : Number},lng:{ type : Number }
        }
    )
}

module.export = Image;
