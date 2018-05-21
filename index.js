const config = require('./config');
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');



const fillForm = async (LOCAL_HOST_URL) => {
  signale.success('🔗 La liga es: ' + LOCAL_HOST_URL);

const browser = await puppeteer.launch({headless: false, devtools: true});
// const browser = await puppeteer.launch();
const page = await browser.newPage();
const d = new Date();
const name = `AT&T_LUNCH_LEARN_${d.getHours()}h${d.getMinutes()}`;

signale.success('Funciona chingón ✊');

await page.goto(LOCAL_HOST_URL);

// 1. Wait for selector
await page.waitForSelector('select[name="carriers"]', { timeout: 2000})
  .then(async () => {
      await signale.success('Sí aparece 🐵');

      // 2. Llena la formato
      await page.select('select[name="carriers"]', '1')
        .catch( err => {
          signale.fatal('No está Telcel 😞');
        });
      await signale.success('Seleccionamos Telcel 👀');

  })
  .catch(async (err) => {
    await signale.fatal('No aparece 😥');

  });

  await page.type('#campaignName', name, {delay: 10});





signale.success('Cerrando 🚶');
// browser.close();

}

// signale.fatal(config);
fillForm('http://localhost:3000/#/add');
