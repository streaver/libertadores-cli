const chalk = require('chalk');
const getGames = require('../../scraping/get-games');
const { cli } = require('cli-ux');
const { Command, flags } = require('@oclif/command');

class AllCommand extends Command {
  async run() {
    const { flags } = this.parse(AllCommand);
    const { 'game-site': showGameSite } = flags;

    try {
      cli.action.start('Fetching data');

      const games = await getGames();

      cli.action.stop();

      games.forEach(match => {
        if (match.isHeader) {
          this.log(`${match.round} - ${match.date}`);
        } else {
          // prettier-ignore
          let gameDetails = `\t${match.teamOne} (${match.teamOneResult}) - (${match.teamTwoResult}) ${match.teamTwo}`;
          let line;

          // prettier-ignore
          if (
            match.teamOneResult.length > 0 &&
            match.teamTwoResult.length > 0
          ) {
            line = chalk.green(gameDetails)
          } else {
            line = chalk.red(gameDetails);
          }

          if (showGameSite && match.gameSite) {
            line += ` -> ${match.gameSite}`;
          }

          this.log(line);
        }
      });
    } catch (e) {
      console.error(e);

      this.error(
        'An error occurred while retrieving data, please try again or report it!'
      );
    }
  }
}

AllCommand.description = `Retrieves all the games for the "Copa Libertadores"

Color coding:

- green means it has already been played
- red means it is a future game
`;

AllCommand.flags = {
  'game-site': flags.boolean({
    char: 's',
    description: 'Whether or not to show a link to the game site',
    default: false,
  }),
};

module.exports = AllCommand;
