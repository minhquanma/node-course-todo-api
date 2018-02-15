const mongoose = require('mongoose');

// Todo model
var Todo = mongoose.model('Todos', mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
}));

// User model
var User = mongoose.model('User', mongoose.Schema({  
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
}));
module.exports = {Todo, User};