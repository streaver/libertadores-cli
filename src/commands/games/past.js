const { pastGames } = require('../../fetchers/games');
const runWithSpinner = require('../../utils/run-with-spinner');
const formatOutput = require('../../utils/format-output');
const gamesOptions = require('../../utils/games-options');
const { Command } = require('@oclif/command');

class PastCommand extends Command {
  async run() {
    const { flags } = this.parse(PastCommand);

    try {
      const gamesData = await runWithSpinner(() => pastGames(flags.year));

      gamesData.forEach(data => this.log(formatOutput(data, flags)));
    } catch (e) {
      console.error(e);

      this.error(
        'An error occurred while retrieving data, please try again or report it!'
      );
    }
  }
}

PastCommand.description = `Retrieves all the past games for the "Copa Libertadores"`;

PastCommand.flags = gamesOptions;

module.exports = PastCommand;
