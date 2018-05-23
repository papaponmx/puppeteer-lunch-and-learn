const config = require('./config');
const puppeteer = require('puppeteer'); // High level API to interact with headless Chrome
const signale = require('signale');
const query = require('cli-interact');
const readlineSync = require('readline-sync');

const userSearch = async () => {
  const browser = await puppeteer.launch({headless: false, devtools: true});
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let url;

  signale.success('Funciona chingón 👊');




  // Quieres tú ir a Google?
  const answer = await query.getYesNo('Quieres tú ir a google');
  await  (answer) ? url = 'https://google.com' : url = 'https://wikipedia.org';
  signale.success('Respondiste ' + url);
  // ¿Qué tu quieres buscar?
   await page.goto(url);


   let userQuery;

   try {
       userQuery = await readlineSync.question('What is your favorite food? :');
       await page.waitForSelector('#lst-ib')
         .then( async() => {
          await page.type('#lst-ib', userQuery);
          await page.keyboard.press('Enter');

          signale.success('Buscando: ' + userQuery);
         }
         );
   } catch (e) {
     console.error(e);
     process.exit(1);
   }

   page.waitForSelector(`a[href='https://es.wikipedia.org/wiki/Bar']`)
    .then(() => {
      signale.success('Llegamos al bar 🍫');
      signale.success('Cerrando 🚶');
      browser.close();
    })
    .catch( err => {
      signale.fatal('No está el bar 🏤');
      signale.success('Cerrando 🚶');
      browser.close();

    });
    // .finally(() => {
    //
    // })
    // ;




   // await page.type('', );
  // signale.success('Cerrando el navegador 🚪');
 // browser.close();

}

userSearch();
