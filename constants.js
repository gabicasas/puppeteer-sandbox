const PUPPETEER_OPTS = {
    headless: false,
    slowMo: { default: 300, click: 200, keyup: 10 },
    devtools: true,
    executablePath:'C:\\Users\\gcc16488\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
}
module.exports = {
    PUPPETEER_OPTS: PUPPETEER_OPTS
    }
