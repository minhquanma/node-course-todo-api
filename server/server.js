const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose.js')
const { User } = require('./models/user.js');
const { Todo } = require('./models/todo.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    Todo.create(todo).then((doc) => {
        res.send(doc);
        Todo.remove({_id: doc._id});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

// // User
// var user = new User({
//     email: 'minhquanma@gmail.com  ',
//     name: 'Minh Quan Ma'
// });

// User.create(user).then((doc) => {
//     console.log('User has been created', doc)
//     // Remove user as well
//     User.remove({_id: doc._id}).then((res) => console.log('Removed:', doc._id));
// }, (e) => {
//     console.log('Unable to create new user', e);
// });

