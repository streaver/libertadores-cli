const { expect } = require('chai');
const { flags } = require('@oclif/command');
const gamesOptions = require('../../src/utils/games-options');

describe('gamesOptions', () => {
  it('returns correct gamesOptions object', () => {
    const options = {
      'game-site': flags.boolean({
        char: 's',
        description: 'Whether or not to show a link to the game site',
        default: false,
      }),
    };

    expect(JSON.stringify(gamesOptions)).to.deep.equal(JSON.stringify(options));
  });
});
