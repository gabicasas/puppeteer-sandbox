//npm run launchFile -- aaa.js aaa



var events = require('events');
var eventEmitter = new events.EventEmitter(); 
let paramToSaveData={};



    
    let a=require('./'+process.argv[2]);
   
    a[process.argv[3]](paramToSaveData,eventEmitter);