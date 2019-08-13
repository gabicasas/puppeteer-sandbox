console.log(process.argv[2])

var events = require('events');
var eventEmitter = new events.EventEmitter(); 
let paramToSaveData={};


    
    
    let a=require('./'+process.argv[2]);
    
    a.testTeclas(paramToSaveData,eventEmitter);