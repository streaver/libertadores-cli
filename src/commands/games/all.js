const { allGames } = require('../../fetchers/games');
const runWithSpinner = require('../../utils/run-with-spinner');
const formatOutput = require('../../utils/format-output');
const gamesOptions = require('../../utils/games-options');
const { Command } = require('@oclif/command');

class AllCommand extends Command {
  async run() {
    const { flags } = this.parse(AllCommand);

    try {
      const gamesData = await runWithSpinner(() => allGames(flags.year));

      gamesData.forEach(data => this.log(formatOutput(data, flags)));
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

AllCommand.flags = gamesOptions;

module.exports = AllCommand;
