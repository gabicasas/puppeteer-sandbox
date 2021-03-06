function download(globalVar, eventEmitter) {
  globalVar.urls = {};
  global.inUse = false;
  global.name=0;
 

  eventEmitter.on("scrapedDataEvent", async data => {
    global.inUse = true;
    console.log("Capturo evento " + data.length);
    for (let i in data) {
      let pageData = data[i];
      let urlTarget = pageData.href;

      const constants = require("./constants.js");
    
      const puppeteer = require("puppeteer");
      
      const keyboardMapping = require("./USKeyboardLayout.js");
      const browser = await puppeteer.launch(constants.PUPPETEER_OPTS);
      const page = await browser.newPage();
      const navigationPromise = page.waitForNavigation();
      const download = require("download-pdf");

      try {
        await page.goto(urlTarget);
        let cookies = await page.cookies();
        await page.waitForSelector("a");
        page.exposeFunction("puppeteerMutationListener", function(value) {
          globalVar["page"] = value;
          //console.log(globalVar);
          global.name++;
          eventEmitter.emit("changeData", {"pdf":value,"cookies":cookies,name:global.name+".pdf"});
          setTimeout(()=>{console.log("cerrado correcto");browser.close()},10000);
        });
     

       page
          .$$eval("a", links => {
            console.log(links[0].href);
            puppeteerMutationListener(links[0].href);
          })
          .catch(e => {
          
            console.log("Sin enlace");
            console.log(e);
            //browser.close();

          });
      } catch (e) {
       
        console.log(e);
        setTimeout(()=>{console.log("Pagina incorecta");browser.close()},10000);
      }
    }

    // )()}
  });


  eventEmitter.on("changeData", async data => {
    //debugger
    //console.log(data);
    //page.goto(data);
    const request = require("request");
    const fs = require("fs");
    var pdf = data.pdf;

    let cookie_str = "";
    for (var i = 0; i < data.cookies.length; i += 1) {
      let a = data.cookies[i];
      cookie_str += a.name + "=" + a.value + ";";
    }
    // console.log(cookie_str);
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    request
      .get({
        url: pdf,
        headers: {
          cookie: cookie_str
        }
      })
      .pipe(fs.createWriteStream("./pdf/" +data.name));

    //browser.close();
  });




}

module.exports = {
  download: download
};
