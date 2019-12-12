
function download(globalVar, eventEmitter) {

  globalVar.urls = {};
  global.inUse = false;

  eventEmitter.on('scrapedDataEvent', (data) => {
    global.inUse = true;
    console.log("Capturo evento");
    for (let i in data) {
      let pageData = data[i];
      if(globalVar.urls[pageData.href]==undefined)
        globalVar.urls[pageData.href] = { href: pageData.href, downloaded: false };
    }
    // console.log(pageData.href);
    (async () => {
      for (var i in globalVar.urls) {
        if(!globalVar.urls[i].downloaded){
          globalVar.urls[i].downloaded=true;
        let urlTarget=globalVar.urls[i].href
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

        await page.goto(urlTarget);
        try {
          await page.waitForSelector("a")
          page.exposeFunction('puppeteerMutationListener', function (value) {
            globalVar['page'] = value;
            //console.log(globalVar);
            eventEmitter.emit('changeData', value);
          });
          eventEmitter.on('changeData', (data) => {
            //debugger
            console.log(data);
            //page.goto(data);
            var pdf = data
            
           var options = {
               directory: "C:/Users/gcc16488/Documents/",
               filename: Math.random().toString()+".pdf"
           }
            
           /*download(pdf, options, function(err){
               if (err)
                throw err
               console.log("meow")
           })*/ 

            browser.close();
          })

          page.$$eval("a", links => {
            console.log(links[0].href);
            puppeteerMutationListener(links[0].href);


          })
        } catch (e) {
          debugger;
        }



      }

      }

      // });
    })()
  }
);
}

module.exports = {
  download: download
}