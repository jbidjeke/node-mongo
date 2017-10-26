
    
/* Schema Geolocate */

funtion Geolocate (mongoose){
    this.schema = mongoose.Schema;  
}

Geolocate.prototype.doSchema = funtion(){
    // Geolocate Schema
    return new this.schema(
        {
            lat:{ type : Number},lng:{ type : Number }
        }
    )
}

module.export = Geolocate;
