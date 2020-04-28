const EmptyCommand = require('./../empty-command');
const subCommands = require('./subcommands');

const commandDefinition = require('./definition');

class TestCommand extends EmptyCommand {
    constructor() {
        super(commandDefinition);

        const helloSubCommand = new subCommands.HelloSubCommand();
        this.subCommands.push(helloSubCommand);
    }
}

module.exports = TestCommand;
