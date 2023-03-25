var mongoose = require('mongoose');

module.exports = mongoose.model('Assn8', {     //mongodb connection is done here
    //output message.
    full_name : {type: String, require: true},
    email : {type: String, require: true},
    password : {type: String, require: true}
});