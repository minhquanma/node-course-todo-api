// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console('Unable to insert Todos', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    // Insert new doc into Users(name, age, location)
    /* db.collection('Users').insertOne({
        name: 'Amane',
        age: 18,
        location: 'Japan'
    }, (err, result) => {
        if (err) {
            return console('Unable to insert User', err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    }); */

    

    db.close(); 
});