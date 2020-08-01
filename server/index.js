
import  path  from 'path';
//const express = require('express');
import express from 'express'




const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRoutes= require("./routes/index")

app.set('port', process.env.PORT || 3000);
//Log


//Routing

app.use('/static', express.static(__dirname + '/static'));
app.use('/', indexRoutes);
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
    console.log("Ficheros estaticos en "+__dirname + '/public');
  });