// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    /* db.collection('Todos').find({
        _id: new ObjectID('5a81f9a7a2b08b42c034105e')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(err);
    }); */

    /* db.collection('Todos').find().count().then((count) => {
        console.log('Todos count:', count);
    }, (err) => {
        console.log(err);
    }); */

    var query = {location: "Japan"};

    db.collection('Users').find(query).toArray((err, docs) => {
        docs.forEach(element => {
            console.log(`Name: ${element.name}`);
            console.log(`Location: ${element.location}`);
        });
    });

    db.close();
});