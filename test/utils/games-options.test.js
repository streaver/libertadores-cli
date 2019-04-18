const { expect } = require('chai');
const { flags } = require('@oclif/command');
const gamesOptions = require('../../src/utils/games-options');

describe('gamesOptions', () => {
  it('returns correct gamesOptions object', () => {
    expect(gamesOptions['game-site'].char).to.equal('s');
    expect(gamesOptions['game-site'].description).to.equal(
      'Whether or not to show a link to the game site'
    );
    expect(gamesOptions['game-site'].default).to.equal(false);
  });
});
