const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    app = express(),
    path = require('path'),
    session = require('express-session'),
    PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//use below if storing sessions 
// app.use(session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: false
// }));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
};

app.use(routes);
app.use(express.static('images'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portyPorts');
app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, '/.client/build/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`🙉 ==> Server now listening to you... ON PORT ${PORT}!!`)
});