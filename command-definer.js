class CommandDefiner {
    static define (command) {
        return {
            command: command.template,
            description: command.description,
            builder: build(command),
            handler: commandExecution(command)
        }
    }
}

const build = function (command) {
    return (yargs) => {
        for (const subCommand of command.subCommands) {
            yargs.command(CommandDefiner.define(subCommand));
        }

        for (const option of command.options) {
            yargs = yargs.options(option.name, option.definition);
        }

        return yargs;
    }
}

const commandExecution = function (command) {
    return async (args) => {
        await command.execute(args);
    }
}

module.exports = CommandDefiner;
