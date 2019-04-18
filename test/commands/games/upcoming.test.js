const {expect, test} = require('@oclif/test')

describe('games:upcoming', () => {
  test
  .stdout()
  .command(['games:upcoming'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['games:upcoming', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
