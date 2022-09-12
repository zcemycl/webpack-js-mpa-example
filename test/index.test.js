const puppeteer = require('puppeteer');
const repoName = 'webpack-js-mpa-example'
const length = repoName.length;
const si = __dirname.indexOf(repoName);
jest.setTimeout(50000)

const ci = Boolean(process.env.CI || false);
console.log(ci, __dirname+'\n', 
    ci?
    `file://${__dirname.slice(0, si+length)}/${repoName}/dist/index.html`:
    `file://${__dirname.slice(0, si+length)}/dist/index.html`)

test('should click', async () => {
    const browser = await puppeteer.launch({
        headless: ci, 
        slowMo: ci?0:80,
        args: ['--window-size=640,480']
    });
    const page = await browser.newPage();
    await page.goto(ci?
        `file://${__dirname.slice(0, si+length)}/${repoName}/dist/index.html`:
        `file://${__dirname.slice(0, si+length)}/dist/index.html`);
    await page.click('button');
    const paragraph = await page.$eval('h4', (input) => input.innerHTML);
    console.log(paragraph)
    expect(paragraph).not.toBe('');
    await browser.close()
})