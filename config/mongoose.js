//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/UsersDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { 
    console.log('Go on Mate! The Database is connected successfully');
}).catch((e) => {
    console.log("no connection");
})
