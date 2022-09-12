const puppeteer = require('puppeteer');
const repoName = 'webpack-js-mpa-example'
const length = repoName.length;
const si = __dirname.indexOf(repoName);
console.log(__dirname)
console.log(`file://${__dirname.slice(0, si+length)}/dist/index.html`)
jest.setTimeout(30000)

test('should click', async () => {
    const browser = await puppeteer.launch({
        headless: true, 
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(`file://${__dirname.slice(0, si+length)}/dist/index.html`);
    await page.click('button');
    const paragraph = await page.$eval('p', (input) => input.innerHTML);
    console.log(paragraph)
    expect(paragraph).not.toBe('');
    browser.close()
})