import { Command } from "commander";

const program = new Command();

program.version('0.0.1');

program.option('-c, --config', 'load a pre-configured template')
       .option('-e, --export', 'exports configuration to a file as template') 