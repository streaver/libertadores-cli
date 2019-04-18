const chalk = require('chalk');
const isPastGame = require('./is-past-game');

module.exports = function formatOutput(data, flags) {
  const { 'game-site': showGameSite } = flags;

  if (data.isHeader) {
    return `${data.round} - ${data.date}`;
  } else {
    // prettier-ignore
    let gameDetails = `\t${data.teamOne} (${data.teamOneResult}) - (${data.teamTwoResult}) ${data.teamTwo}`;
    let line;

    if (isPastGame(data)) {
      line = chalk.green(gameDetails);
    } else {
      line = chalk.red(gameDetails);
    }

    if (showGameSite && data.gameSite) {
      line += ` -> ${data.gameSite}`;
    }

    return line;
  }
};
