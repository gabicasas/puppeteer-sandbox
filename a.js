function a(globalVar, eventEmitter){
  (async () => {
    const constants=require('./constants.js')
    const puppeteer = require('puppeteer');
    const keyboardMapping = require('./USKeyboardLayout.js');
    const fs = require('fs')
    const browser = await puppeteer.launch(constants.PUPPETEER_OPTS)
    const page = await browser.newPage()  
   await page.goto("https://www.betfair.es/sport/inplay")
  
   await page.setViewport({  width: 1920, height: 455})
  
   try{
    await page.waitForSelector("body > DIV:nth-child(4) > DIV:nth-child(1)");
  
 
  
  }catch(e){console.log("No pilla nada")}
    await page.keyboard.down(keyboardMapping.keyCodeLayout[81].code)
    await page.evaluate(fs.readFileSync('./TemplateGenerator.js', 'utf8')); 
   await page.evaluate(element => {
     debugger;       
    let tg=new TemplateGenerator({"selector":"DIV:nth-child(1) > DIV:nth-child(3) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)","selectorDom":[{"tag":"SPAN","child":0},{"tag":"A","child":0},{"tag":"LI","child":0},{"tag":"UL","child":0},{"tag":"DIV","child":2},{"tag":"DIV","child":0}],"nodes":[{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n1.06\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n10.0\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n13.0\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"Irá a En Juego"},{"node":{},"value":"\n"},{"node":{},"value":"En Juego"},{"node":{},"value":"\n"},{"node":{},"value":"\nThrottur Reykjavik (W)\n","fixed":true},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"-"},{"node":{},"value":" "},{"node":{},"value":"\n"},{"node":{},"value":" "},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"-"},{"node":{},"value":" "},{"node":{},"value":"\n"},{"node":{},"value":"\nFjolnir (W)\n","fixed":true},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"Prórroga"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":" "},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n20:15\n"},{"node":{},"value":" "},{"node":{},"value":" "},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"},{"node":{},"value":"\n"}]});
    tg.staticData()
    })
  
  
  })()}
  
  module.exports ={
    a: a
  }