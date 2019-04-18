const { expect } = require('chai');
const isPastGame = require('../../src/utils/is-past-game');

describe('isPastGame', () => {
  it('returns true for past games', () => {
    const data = {
      teamOneResult: '0',
      teamTwoResult: '1',
    };

    expect(isPastGame(data)).to.equal(true);
  });

  it('returns false for past games', () => {
    const data = {
      teamOneResult: '',
      teamTwoResult: '',
    };

    expect(isPastGame(data)).to.equal(false);
  });
});
