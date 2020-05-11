const express = require('express');
const router = express.Router();
import bodyParser from 'body-parser'; 
import  {dgt3} from '../../dgt3'


router.use(bodyParser.urlencoded({
    extended: true
  }));


  router.use(bodyParser.json());

router.get('/',(req,res)=>{
    res.send("Fin");
})


router.post('/',(req,res)=>{
  var fs = require('fs');
 
  var events = require('events');
  var eventEmitter = new events.EventEmitter(); 
  let paramToSaveData={};
  
   
      paramToSaveData.dateIni=req.body.dateIni;
      paramToSaveData.dateFin=req.body.dateFin;
  
      console.log("FECHA INICIAL "+ paramToSaveData.dateIni + " FECHA FINAL  " + paramToSaveData.dateFin)
      
      try {
        
          fs.writeFileSync('./pdf/sync.txt', 'anni', { mode: 0o755 });
          console.log("Fihero escrito")
        } catch(err) {
          // An error occurred
          console.error(err);
        }
     
     
      dgt3(paramToSaveData,eventEmitter);


  res.send("Fin");
})

module.exports=router