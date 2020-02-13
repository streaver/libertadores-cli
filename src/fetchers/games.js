const puppeteer = require('puppeteer');
const isPastGame = require('../utils/is-past-game');

const yearUrl = {
  '2019': 'http://www.conmebol.com/es/copa-libertadores-2019/fixture',
  '2020': 'http://www.conmebol.com/es/copa-libertadores-2020',
}

async function fetchDataFromConmebol(year) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = yearUrl[year];

  await page.goto(url, {
    waitUntil: 'load',
    timeout: 60000,
  });

  await page.waitForSelector('.Opta-fixtures-list li table tbody');

  const parsedGames = await page.evaluate(() => {
    const elements = Array.from(
      document.querySelectorAll('.Opta-fixtures-list li table tbody')
    );

    return elements.map(element => {
      const isHeader = element.className === '';
      const parsed = { isHeader };

      if (isHeader) {
        const headerElements = element.querySelectorAll('span');

        parsed.date = headerElements[0].textContent;
        parsed.round = headerElements[1].textContent;
      } else {
        const matchElements = element.querySelectorAll('td');

        parsed.teamOne = matchElements[1].textContent;
        parsed.teamOneResult = matchElements[3].textContent.trim();

        parsed.teamTwo = matchElements[7].textContent;
        parsed.teamTwoResult = matchElements[5].textContent.trim();

        if (
          parsed.teamOneResult.length > 0 &&
          parsed.teamTwoResult.length > 0
        ) {
          parsed.gameSite = matchElements[10].children[0].href;
        }
      }

      return parsed;
    });
  });

  await browser.close();

  return parsedGames;
}

async function allGames(year) {
  return fetchDataFromConmebol(year);
}

async function pastGames(year) {
  const gamesData = await fetchDataFromConmebol(year);

  return gamesData.filter(data => data.isHeader || isPastGame(data));
}

async function upcomingGames(year) {
  const gamesData = await fetchDataFromConmebol(year);

  return gamesData.filter(data => data.isHeader || !isPastGame(data));
}

module.exports = {
  allGames,
  pastGames,
  upcomingGames,
};
