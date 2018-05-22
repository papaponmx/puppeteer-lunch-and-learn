const config = require('./config');
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');
const query = require('cli-interact');

const userSearch = async () => {
  const browser = await puppeteer.launch({headless: false, devtools: true});
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let url;

  signale.success('Funciona chingón 👊');


  // await page.goto();


  // Quieres tú ir a Google?
  const answer = await query.getYesNo('Quieres tú ir a google');
  await  (answer) ?ﬂ url = 'https://google.com' : url = 'https://wikipedia.org';

  signale.success('Respondiste ⁉️' + url);

  // ¿Qué tu quieres buscar?


  signale.success('Cerrando el navegador 🚪');
 browser.close();

}

userSearch();
