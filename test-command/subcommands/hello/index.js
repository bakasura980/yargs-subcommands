const Command = require('./../../../command');
const commandDefinition = require('./definition');

class HelloCommand extends Command {
    constructor() {
        super(commandDefinition);
    }

    async execute (args) {
        const options = await super.processOptions(args);
        console.log(`Hello ${options.message || ''}`);
    }
}

module.exports = HelloCommand;
