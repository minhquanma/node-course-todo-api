const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose.js')
const { User } = require('./models/user.js');
const { Todo } = require('./models/todo.js');

const app = express();

const port = process.env.PORT || 3000; 

app.use(bodyParser.json());

// Add item
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    Todo.create(todo).then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get all items
app.get('/todos', (req, res) => {
    Todo.find().then((doc) => {
        res.send({
            doc
        });
    }, (e) => {
        res.status(400).send(e);
    } );
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (ObjectID.isValid(id)) {
        Todo.findById(id).then((todo) => {
            if (todo) {
                res.status(200).send({todo});
            } else {
                // Not found
                res.status(204).send();
            }
        }).catch((e) => {
            res.status(400).send();
        });
    } else {
        res.status(404).send();
    }
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (ObjectID.isValid(id)) {
        Todo.findByIdAndRemove(id).then(todo => {
            if (todo) {
                // Succeed
                res.status(200).send({todo});
            } else {
                // Not found
                res.status(204).send();
            }
        }).catch((e) => {
            res.status(400).send();
        });
    } else {
        res.status(404).send();
    }
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text'], ['completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed == true) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completed = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
        // Not found
        if (!todo) {
            return res.status(404).send();
        }
        // else
        res.status(200).send({todo});

    }).catch(e => {
        res.send(400).send();
    });
});

// POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'name']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch(e => {
        res.status(400).send(e);
    });
});

app.get('/users', (req, res) => {
    User.find().then((doc) => {
        res.send({
            doc
        });
    }, (e) => {
        res.status(400).send(e);
    } );
});

app.listen(port, () => {
    var date = new Date();
    var currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    console.log(`Started on port: ${port}`)
    console.log(`Current time is: ${currentTime}`);
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

