
function download(globalVar, eventEmitter) {

eventEmitter.on('scrapedDataEvent',(error,result) => {
    (async () => {
        debugger;
        const constants = require('./constants.js')
    const puppeteer = require('puppeteer-core');
    const fs = require('fs')
    const keyboardMapping = require('./USKeyboardLayout.js');
    const browser = await puppeteer.launch(constants.PUPPETEER_OPTS)
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto("https://sedeapl.dgt.gob.es/WEB_TTRA_CONSULTA/Todos.faces?idioma=es")

    })
  });
}

module.exports = {
    download: download
    }