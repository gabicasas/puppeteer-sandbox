const PUPPETEER_OPTS = {
  headless: false,
  slowMo: { default: 300, click: 200, keyup: 10 },
  devtools: true,
}
function gabi(globalVar){const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch(PUPPETEER_OPTS)
  const page = await browser.newPage()
  
  await page.goto("http://www.visualeconomy.com/MarketMonitor/MarketMonitor.aspx?Page=ECO_Home")
  
  await page.setViewport({ width: 558, height: 937 })
  
  await page.waitForSelector("#UI_0_CT_MMO_TABLE_INDICES_0 > #UI_0_MMO_TABLE_INDICES_0 > tbody > tr:nth-child(7) > .CellSymbolDescription");
 await page.click("#UI_0_CT_MMO_TABLE_INDICES_0 > #UI_0_MMO_TABLE_INDICES_0 > tbody > tr:nth-child(7) > .CellSymbolDescription");
  
 page.exposeFunction('puppeteerMutationListener', function(value){console.log(value)});

  await page.waitForSelector("TR:nth-child(7) > TD.CellNoBorder:nth-child(3)")
  globalVar.a=await page.evaluate(element => { 
    let observer = new MutationObserver(
    function() {
      //debugger;
      let obj= document.querySelector("TR:nth-child(7) > TD.CellNoBorder:nth-child(3)");
      puppeteerMutationListener({'_mutation_':{'a':obj.innerHTML}})
      console.log({'_mutation_':{'a':obj.innerHTML}})
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
      puppeteerMutationListener({'_mutation_':{'b':obj.innerHTML}})
      console.log({'_mutation_':{'b':obj.innerHTML}})
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
      puppeteerMutationListener({'_mutation_':{'c':obj.innerHTML}})
      console.log({'_mutation_':{'c':obj.innerHTML}})
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
setInterval(() => {console.log(paramToSaveData)},10000);
gabi(paramToSaveData);