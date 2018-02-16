const mongoose = require('mongoose');

// User model
var User = mongoose.model('Users', mongoose.Schema({  
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        default: 'Undefined',
        trim: true,
        minlength: 1
    }
}));

module.exports = {User}