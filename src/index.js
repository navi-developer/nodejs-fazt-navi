const express = require('express');
const app=express();
const path = require('path');

// const indexRoute = require('./routes/index');


//setting
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//listening the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

//middlewares

//routes
app.use(require('./routes'));


//static files
app.use(express.static(path.join(__dirname,'public')));