/* Schema Advert */

funtion Advert (mongoose){
    this.category     =   require("./category");
    this.geolocate    =   require("./geolocate");
    this.image        =   require("./image");
    this.schema = mongoose.Schema;  
}

Advert.prototype.doSchema = funtion(){
    var Category  = new this.category(this.mongoose).doSchema();
    var Geolocate = new this.geolocate(this.mongoose).doSchema();
    var Image  = new this.image(this.mongoose).doSchema();
    // Advert Schema
    return new this.schema(
        {
            date:{ type: Date },price:{ type: Number},title:{ type: String },author:{ type: String },content:{ type: String },published:{ type: Number, required: true },updated_at:{ type: Date, default: Date.now },nb_applications:{ type: Number, required: true },slug:{ type: String },
            categories: [Category],
            geolocates: [Geolocate],
            images: [Image]
        }
    )
    
}

module.export = Advert;
