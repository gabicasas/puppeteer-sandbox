function testTeclas(globalVar, eventEmitter){
  (async () => {
    const puppeteer = require('puppeteer');
    const keyboardMapping = require('./USKeyboardLayout.js');
    const browser = await puppeteer.launch(PUPPETEER_OPTS)
    const page = await browser.newPage()  
   await page.goto("https://www.bwin.es/es/mobileportal/register?trid=in12391")
  
   await page.setViewport({ width: 558, height: 969 })
  
    await page.waitForSelector(".form-group > pt-reg-email > .ng-invalid > #emailaddress > .form-control-i-l");
 await page.click(".form-group > pt-reg-email > .ng-invalid > #emailaddress > .form-control-i-l");
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[71].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[71].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[66].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[66].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[73].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[73].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[16].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[71].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[16].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[71].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[66].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[66].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[73].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[73].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[16].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[67].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[67].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[83].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[83].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[65].code)
  
    await page.keyboard.down(keyboardMapping.keyCodeLayout[83].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[83].code)
  
    await page.keyboard.up(keyboardMapping.keyCodeLayout[16].code)
  
  
  })()}

  module.exports ={
    testTeclas: testTeclas
  }