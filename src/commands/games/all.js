const { allGames } = require('../../fetchers/games');
const runWithSpinner = require('../../utils/run-with-spinner');
const formatOutput = require('../../utils/format-output');
const { Command, flags } = require('@oclif/command');

class AllCommand extends Command {
  async run() {
    const { flags } = this.parse(AllCommand);

    try {
      const gamesData = await runWithSpinner(allGames);

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

AllCommand.flags = {
  'game-site': flags.boolean({
    char: 's',
    description: 'Whether or not to show a link to the game site',
    default: false,
  }),
};

module.exports = AllCommand;
