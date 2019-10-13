function template(globalVar, eventEmitter){
  (async () => {
    const constants=require('./constants.js')
    const puppeteer = require('puppeteer');
    const keyboardMapping = require('./USKeyboardLayout.js');
    const browser = await puppeteer.launch(constants.PUPPETEER_OPTS)
    const page = await browser.newPage()  
   await page.goto("http://www.visualeconomy.com/MarketMonitor/MarketMonitor.aspx?Page=ECO_Home")
  
   await page.setViewport({ width: 797, height: 969 })
  
    await page.waitForSelector("body > DIV:nth-child(3) > DIV:nth-child(2) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1)");
 await page.click("body > DIV:nth-child(3) > DIV:nth-child(2) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1)");
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[118].code)
  
  const tg = require('./TemplateGenerator.js');   
    let a=new tg.TemplateGenerator({"selector":"TD:nth-child(3)","selectorDom":[{"tag":"TD","child":2}],"nodes":[{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t\t"},{"node":{},"value":" "},{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t\t"},{"node":{},"value":"AEX-INDEX","fixed":true},{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t\t"},{"node":{},"value":"577,42"},{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t\t"},{"node":{},"value":"1,59%"},{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t\t"},{"node":{},"value":" "},{"node":{},"value":" "},{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t\t"},{"node":{},"value":"18,35%"},{"node":{},"value":"\n\t\t\t\t\t\t\t\t\t\t\t"}]});
    a.staticData()
  
  
  })()}
  
  module.exports ={
    template: template
  }