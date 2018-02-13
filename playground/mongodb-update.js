// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a8330550d21dc11e023159c')
    }, {
        $set: {
           name: 'Sugai-sama',
        },
        $inc: {
           age: 1
        }
    }, {
       returnOriginal: false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });
    db.close();
});