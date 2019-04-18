const { upcomingGames } = require('../../fetchers/games');
const runWithSpinner = require('../../utils/run-with-spinner');
const formatOutput = require('../../utils/format-output');
const { Command } = require('@oclif/command');

class UpcomingCommand extends Command {
  async run() {
    const { flags } = this.parse(UpcomingCommand);

    try {
      const gamesData = await runWithSpinner(upcomingGames);

      gamesData.forEach(data => this.log(formatOutput(data, flags)));
    } catch (e) {
      console.error(e);

      this.error(
        'An error occurred while retrieving data, please try again or report it!'
      );
    }
  }
}

UpcomingCommand.description = `Retrieves all the upcoming games for the "Copa Libertadores"`;

module.exports = UpcomingCommand;
