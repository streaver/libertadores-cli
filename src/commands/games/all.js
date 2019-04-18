const {Command, flags} = require('@oclif/command')

class AllCommand extends Command {
  async run() {
    const {flags} = this.parse(AllCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/federico/streaver/libertadores-cli/src/commands/games/all.js`)
  }
}

AllCommand.description = `Describe the command here
...
Extra documentation goes here
`

AllCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AllCommand
