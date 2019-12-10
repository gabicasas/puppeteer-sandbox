
function download(globalVar, eventEmitter) {

  
 

eventEmitter.on('scrapedDataEvent', (data) => {

  console.log("Capturo evento");
  for(let i in data){
    let pageData=data[i];
   // console.log(pageData.href);
    (async (pageData) => {
    
 // data.forEach(async pageData => {
   //debugger; 
  //console.log(pageData.href);
   
     //  debugger;
        const constants = require('./constants.js')
    const puppeteer = require('puppeteer-core');
    const fs = require('fs')
    const keyboardMapping = require('./USKeyboardLayout.js');
    const browser = await puppeteer.launch(constants.PUPPETEER_OPTS)
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    const download = require('download-pdf')

    await page.goto(pageData.href);
    try{
    await page.waitForSelector("a")
    page.exposeFunction('puppeteerMutationListener', function(value){
      globalVar['page']=value;
      //console.log(globalVar);
      eventEmitter.emit('changeData',value);
   });
   eventEmitter.on('changeData', (data) => {
    //debugger
    console.log(data);
    //page.goto(data);
    var pdf = data
 /*
var options = {
    directory: "C:/Users/Gabi/Documents/",
    filename: "d.pdf"
}
 
download(pdf, options, function(err){
    if (err)
     throw err
    console.log("meow")
}) */
   
   browser.close();
  })
  
    page.$$eval("a",links => {
      console.log(links[0].href);
      puppeteerMutationListener(links[0].href);
  
     
    })
    }catch(e){
      debugger;
    }
    
   
 
    
   

  
 // });
    })(pageData)}
});
}

module.exports = {
    download: download
    }