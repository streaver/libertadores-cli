const { flags } = require('@oclif/command');

module.exports = {
  'game-site': flags.boolean({
    char: 's',
    description: 'Whether or not to show a link to the game site',
    default: false,
  }),

  'year': flags.string({
    char: 'y',
    description: 'The year from which you want to get data. Defaults to current year',
    default: new Date().getFullYear(),
  }),
};
