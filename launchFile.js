//npm run launchFile -- aaa.js aaa


var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter(); 
let paramToSaveData={};

 
    paramToSaveData.dateIni=process.argv[4];
    paramToSaveData.dateFin=process.argv[5];

    console.log("FECHA INICIAL "+ paramToSaveData.dateIni + " FECHA FINAL  " + paramToSaveData.dateFin)
    
    try {
      
       // fs.writeFileSync('./pdf/sync.txt', 'anni', { mode: 0o755 });
        console.log("Fihero escrito")
      } catch(err) {
        // An error occurred
        console.error(err);
      }
    let a=require('./'+process.argv[2]);
   
    a[process.argv[3]](paramToSaveData,eventEmitter);