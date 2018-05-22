const config = require('./config');
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');


const userSearch = async () => {
  const browser = await puppeteer.launch({headless: false, devtools: true});
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();

  signale.success('Funciona chingón 👊');


  await page.goto();


  // Quieres tú ir a Google?


  // ¿Qué tu quieres buscar?

}

userSearch();
