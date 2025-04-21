const fs = require('fs');
const cheerio = require('cheerio');

async function fetchMenu() {
  try {
    const url = 'https://cgi.ravintolapalvelut.iss.fi/ravintola';
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const menuItems = [];

    $('.lunch-menu__day').each((i, elem) => {
      const day = $(elem).find('h2.collapsible-title').text().trim();
      const items = [];

      $(elem).find('p').each((j, p) => {
        const text = $(p).text().trim();
        if (text) {
          items.push(text);
        }
      });

      menuItems.push({ day, items });
    });

    fs.writeFileSync('menu.json', JSON.stringify(menuItems, null, 2), 'utf8');
    console.log('Menu saved to menu.json');
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
}

fetchMenu();