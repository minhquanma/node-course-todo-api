
const { User, Todo } = require('./mongo-model.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true });
 

var work = new Todo({
    text: false
});

/*
Todo.create({text: false}).then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
    Todo.remove({_id: doc._id}, (err) => {
        if (err) {
            console.log(err);
        } 
        else {
            console.log('Removed:', doc._id);
        }
    });
});*/

// User
var user = new User({
    email: 'minhquanma@gmail.com  ',
    name: 'Minh Quan Ma'
});

User.create(user).then((doc) => {
    console.log('User has been created', doc)
    // Remove user as well
    User.remove({_id: doc._id}).then((res) => console.log('Removed:', doc._id));
}, (e) => {
    console.log('Unable to create new user', e);
});

