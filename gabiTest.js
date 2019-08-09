const PUPPETEER_OPTS = {
  headless: false,
  slowMo: { default: 300, click: 200, keyup: 10 },
  devtools: true,
}
var events = require('events');
var eventEmitter = new events.EventEmitter(); 
function gabi(globalVar, eventEmitter){const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch(PUPPETEER_OPTS)
  const page = await browser.newPage()
  
  await page.goto("http://www.visualeconomy.com/MarketMonitor/MarketMonitor.aspx?Page=ECO_Home")
  
  await page.setViewport({ width: 558, height: 937 })
  
  await page.waitForSelector("#UI_0_CT_MMO_TABLE_INDICES_0 > #UI_0_MMO_TABLE_INDICES_0 > tbody > tr:nth-child(7) > .CellSymbolDescription");
 await page.click("#UI_0_CT_MMO_TABLE_INDICES_0 > #UI_0_MMO_TABLE_INDICES_0 > tbody > tr:nth-child(7) > .CellSymbolDescription");
  
 page.exposeFunction('puppeteerMutationListener', function(value){
   eventEmitter.emit('changeData',value);
 });

  await page.waitForSelector("TR:nth-child(7) > TD.CellNoBorder:nth-child(3)")
  globalVar.a=await page.evaluate(element => { 
    let observer = new MutationObserver(
    function() {
      //debugger;
      let obj= document.querySelector("TR:nth-child(7) > TD.CellNoBorder:nth-child(3)");
      puppeteerMutationListener({'a':obj.innerHTML})
      console.log({'a':obj.innerHTML})
     }
    )
    let config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    let obj= document.querySelector("TR:nth-child(7) > TD.CellNoBorder:nth-child(3)");
    observer.observe(obj, config)
  });
  
  await page.waitForSelector("TR:nth-child(8) > TD.CellNoBorder:nth-child(3)")
  globalVar.b=await page.evaluate(element => { 
    let observer = new MutationObserver(
    function() {
      //debugger;
      let obj= document.querySelector("TR:nth-child(8) > TD.CellNoBorder:nth-child(3)");
      puppeteerMutationListener({'b':obj.innerHTML})
      console.log({'b':obj.innerHTML})
     }
    )
    let config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    let obj= document.querySelector("TR:nth-child(8) > TD.CellNoBorder:nth-child(3)");
    observer.observe(obj, config)
  });
  
  await page.waitForSelector("TD.CellNoBorder.Down:nth-child(6)")
  globalVar.c=await page.evaluate(element => { 
    let observer = new MutationObserver(
    function() {
      //debugger;
      let obj= document.querySelector("TD.CellNoBorder.Down:nth-child(6)");
      puppeteerMutationListener({'c':obj.innerHTML})
      console.log({'c':obj.innerHTML})
     }
    )
    let config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }
    let obj= document.querySelector("TD.CellNoBorder.Down:nth-child(6)");
    observer.observe(obj, config)
  });
  
  
})()}
let paramToSaveData={};


eventEmitter.on('changeData',(value) => {
  for(let i in value){
    paramToSaveData[i]=value[i];
  }
  console.log('evento',value)
  console.log('dato',paramToSaveData);
});
gabi(paramToSaveData,eventEmitter);
