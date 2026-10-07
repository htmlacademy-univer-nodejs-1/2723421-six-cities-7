#!/usr/bin/env node

import { CliApp } from './cli/cli-app.js';
import { HelpCommand } from './cli/commands/help-command.js';
import { VersionCommand } from './cli/commands/version-command.js';
import { ImportCommand } from './cli/commands/import-command.js';

const cli = new CliApp();

cli.registerCommands([
  new HelpCommand(),
  new VersionCommand(),
  new ImportCommand()
]);

await cli.run(process.argv.slice(2));
