const config = require('./config');
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');

const fillForm = async (params) => {
  // const browser = await puppeteer.launch({headless: false});
const browser = await puppeteer.launch();
const page = await browser.newPage();
const d = new Date();
const name = `AT&T_FACUNDO_MOBUSI_${d.getDate()}_${d.getHours()}h${d.getMinutes()}`;

signale.success('Funciona chingón ✊');

signale.success('Cerrando 🚶');
browser.close();

}


fillForm();
