#!/usr/bin/env node
const exec = require('child_process').exec;
const CommandDefiner = require('./command-definer');

const TestCommand = require('./test-command');

(() => {

    let menu = require('yargs');
    const commandDefiner = new CommandDefiner(menu);

    const testCommand = new TestCommand();

    menu.usage('Usage: $0 [command]');

    menu.command(commandDefiner.define(testCommand));

    menu.command({
        command: '*',
        handler (args) {
            exec(`${args['$0']} help`, (error, stdout, stderr) => {
                if (error) {
                    throw new Error(`Could not execute help due to '${error}'`);
                }

                console.log(stdout);
                console.error(stderr);
            });
        }
    });

    menu.help();
    menu.version();
    menu.demandCommand();
    menu.recommendCommands();
    menu.showHelpOnFail();
    menu.argv;
})();