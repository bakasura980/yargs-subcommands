const Command = require('./command');


class EmptyCommand extends Command {
    constructor(commandDefinition) {
        super(commandDefinition);
    }

    async execute (args) {
        if (preValidate(args, this.options)) {
            await super.processOptions(args);
            return true;
        }

        return false;
    }
}

const preValidate = function (args, commandOptions) {
    for (let i = 0; i < commandOptions.length; i++) {
        const option = commandOptions[i];
        if (args[option.name]) {
            return true;
        }
    }

    return false;
}

module.exports = EmptyCommand;
