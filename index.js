const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/#/market?description=will_the_golden_state_warriors_win_the_2019_nba_championship&id=0x93943fb2d02ce1101dadc3ab1bc3cab723fd19d6');
  const sel = ".modal-disclaimer-styles_ModalDisclaimer__ActionButtons button"


  await page.waitFor(".modal-disclaimer-styles_ModalDisclaimer__ActionButtons");
  await page.click(".modal-disclaimer-styles_ModalDisclaimer__ActionButtons button");

  await page.waitFor(5000);
  await page.screenshot({path: 'example.png'});

  await page.tracing.start({path: `trace-${Date.now()}.json`});

  await page.waitFor(300000);

  await page.tracing.stop();


  await browser.close();
})();
