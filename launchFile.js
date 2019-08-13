//npm run launchFile -- aaa.js aaa

console.log(process.argv[2])

var events = require('events');
var eventEmitter = new events.EventEmitter(); 
let paramToSaveData={};


    
    
    let a=require('./'+process.argv[3]);
    
    a[process.argv[4]](paramToSaveData,eventEmitter);