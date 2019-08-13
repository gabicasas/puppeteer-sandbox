const PUPPETEER_OPTS = {
    headless: false,
    slowMo: { default: 300, click: 200, keyup: 10 },
    devtools: true,
}
module.exports = {
    PUPPETEER_OPTS: PUPPETEER_OPTS
    }
