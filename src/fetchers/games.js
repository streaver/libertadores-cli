const puppeteer = require('puppeteer');
const { isPastGame } = require('../utils/index');

async function fetchDataFromConmebol() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://www.conmebol.com/es/copa-libertadores-2019/fixture', {
    waitUntil: 'load',
    timeout: 60000,
  });

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

        if (isPastGame(parsed)) {
          parsed.gameSite = matchElements[10].children[0].href;
        }
      }

      return parsed;
    });
  });

  await browser.close();

  return parsedGames;
}

async function allGames() {
  return fetchDataFromConmebol();
}

async function pastGames() {
  const gamesData = await fetchDataFromConmebol();

  return gamesData.filter(data => data.isHeader || isPastGame(data));
}

async function upcomingGames() {
  const gamesData = await fetchDataFromConmebol();

  return gamesData.filter(data => data.isHeader || !isPastGame(data));
}

module.exports = {
  allGames,
  pastGames,
  upcomingGames,
};
