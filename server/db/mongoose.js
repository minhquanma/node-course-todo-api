const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true }).then((m) => {
    console.log("Connected to MongoDB Server");
}).catch(e => {
    console.log("Failed to connect to MongoDB Server");
});
 
module.exports = {
    mongoose
}