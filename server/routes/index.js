const express = require('express');
const router = express.Router();
import bodyParser from 'body-parser'; 


router.use(bodyParser.urlencoded({
    extended: true
  }));


  router.use(bodyParser.json());

router.get('/',(req,res)=>{
    res.send("Fin");
})

module.exports=router