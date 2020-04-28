const Command = require('./../command');
const subCommands = require('./subcommands');

const commandDefinition = require('./definition');

class TestCommand extends Command {
    constructor() {
        super(commandDefinition);

        const helloSubCommand = new subCommands.HelloSubCommand();
        this.subCommands.push(helloSubCommand);
    }

    async execute (args) {
        await super.processOptions(args);
    }
}

module.exports = TestCommand;
