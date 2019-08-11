console.log(process.argv[2])

var events = require('events');
var eventEmitter = new events.EventEmitter(); 
let paramToSaveData={};


    const PUPPETEER_OPTS = {
        headless: false,
        slowMo: { default: 300, click: 200, keyup: 10 },
        devtools: true,
    } 
    
    let a=require('./'+process.argv[2]);
    
    a.testTeclas(paramToSaveData,eventEmitter);