//Import the mongoose module
const mongoose = require('mongoose');


//Set up default mongoose connection <br/> 
const mongourl = 'mongodb://127.0.0.1/chatdb';
mongoose.connect(mongourl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

//Get the default connection
const db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));


// When successful this would be console logged 
db.once('open', function () {
    console.log("Mongodb Connection Established Successfully");
});
