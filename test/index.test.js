const puppeteer = require('puppeteer');

test('should click', async () => {
    const browser = await puppeteer.launch({
        headless:true, 
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    // const page = await browser.newPage();
    // page.goto('');
    browser.close()
})