const PUPPETEER_OPTS = {
    headless: false,
    slowMo: { default: 300, click: 200, keyup: 10 },
    devtools: true,
  }

  var events = require('events');
var eventEmitter = new events.EventEmitter(); 
function gabi(globalVar, eventEmitter){
    
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch(PUPPETEER_OPTS)
    const page = await browser.newPage()
    await page.goto('https://www.google.es')

    page.exposeFunction('puppeteerMutationListener', function(value){
        eventEmitter.emit('changeData',value);
      });
    
    globalVar.a=await page.evaluate(element => { 
        alert('ha funcionado');
    })





})()
}

let paramToSaveData={};


eventEmitter.on('changeData',(value) => {
  for(let i in value){
    paramToSaveData[i]=value[i];
  }
  console.log('evento',value)
  console.log('dato',paramToSaveData);
});
gabi(paramToSaveData,eventEmitter);