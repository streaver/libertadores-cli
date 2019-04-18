const { expect, test } = require('@oclif/test');
const mock = require('mock-require');

describe('games:upcoming', () => {
  before(() => {
    mock('../../../src/fetchers/games', '../../mocks/fetchers/games');
    mock(
      '../../../src/utils/run-with-spinner',
      '../../mocks/utils/run-with-spinner'
    );
  });

  after(() => {
    mock.stop('../../../src/fetchers/games');
    mock.stop('../../../src/utils/run-with-spinner');
  });

  test
    .stdout()
    .command(['games:upcoming'])
    .it("shows all games data that don't have results", ctx => {
      const lines = ctx.stdout.split('\n');

      expect(lines.length).to.equal(4);

      expect(lines[0]).to.equal('Ronda 4 - jueves 18 de abril');
      expect(lines[1]).to.equal('Ronda 5 - jueves 25 de abril');
      expect(lines[2]).to.equal('\tTeam4 () - () Team5');
      expect(lines[3]).to.equal('');
    });
});
