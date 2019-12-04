const PUPPETEER_OPTS = {
   // executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
   executablePath: 'C:/Users/gcc16488/AppData/Local/Google/Chrome/Application/chrome.exe',
    headless: false,
    slowMo: { default: 300, click: 200, keyup: 10 },
    devtools: true,
}
module.exports = {
    PUPPETEER_OPTS: PUPPETEER_OPTS
    }
