var mongoose = require('mongoose');
//Database connection 
var uristring = 'mongodb://localhost/geoalertinfo';
var mongoOptions = { useMongoClient : true };

mongoose.Promise = global.Promise;
mongoose.connect(uristring, mongoOptions, function (err, res) {
    if (err) { 
        console.log('Error when connecting to: ' + uristring + '. ' + err);
    } 
    else {
        console.log('Successfully connected to: ' + uristring);
    }
});


module.export = mongoose;