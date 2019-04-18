const { cli } = require('cli-ux');

module.exports = async function runWithSpinner(cb) {
  cli.action.start('Fetching data');

  const cbResult = await cb();

  cli.action.stop();

  return cbResult;
};
