const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport:{
        width:1000,
        height:1000
    }
  });
  const page = await browser.newPage();
  await page.goto("https://cn.bing.com/");
  const sbForm = await page.$("#sb_form_q");
  await sbForm.type("hello world", { delay: 1000 });
  await sbForm.press("Enter");
})();
