class CommandDefiner {
    constructor(yargs) {
        this.yargs = yargs;
    }

    define (command) {
        return {
            command: command.template,
            description: command.description,
            builder: this.build(command),
            handler: this.commandExecution(command)
        }
    }

    build (command) {
        return (yargs) => {

            for (const subCommand of command.subCommands) {
                yargs.command(this.define(subCommand));
            }

            for (const option of command.options) {
                yargs = yargs.options(option.name, option.definition);
            }

            return yargs;
        }
    }

    commandExecution (command) {
        return async (args) => {
            const commandResult = await command.execute(args);
            if (!commandResult) {
                this.yargs.showHelp();
            }
        }
    }
}

module.exports = CommandDefiner;
