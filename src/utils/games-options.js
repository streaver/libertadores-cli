const { flags } = require('@oclif/command');

module.exports = {
  'game-site': flags.boolean({
    char: 's',
    description: 'Whether or not to show a link to the game site',
    default: false,
  }),
};
