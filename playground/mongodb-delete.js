// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eating'}).then((result) => {
    //     console.log(result);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'})

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a8331720d21dc11e023159d')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })


    //db.close();
});