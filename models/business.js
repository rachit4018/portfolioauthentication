let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({

    firstname: String,
    lastname: String,
    email: String,
    contactnumber: Number

},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);