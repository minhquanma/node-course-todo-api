const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a8469e530a21c39c445da74'

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) return console.log('Id not found!');
//     console.log('Todo by id:', todo);
// }).catch((e) => {
//     console.log(e);
// });

// // Adding data into User
// User.create({
//     email: "minhquanma@gmail.com",
//     name: "The one who creates this file"
// }).then((gay) => {
//     console.log("U have added a handsome gay, congrats", gay);
// }).catch((e) => {
//     console.log("Shit happened!", e);
// })

var inputID = '5a86e9193937051d6c9c4247';

if (ObjectID.isValid(inputID)) {
    User.findById(inputID).then((user) => {
        if (!user) {
            console.log('UserID not found!');
        } else {
            console.log('User:', inputID);
            console.log('Email:', user.email);
            console.log('Name:', user.name);
        }
    }).catch((e) => {
        console.log(e);
    });
}