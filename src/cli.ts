#!/usr/bin/env node

import chalk from 'chalk';

import { CliApp } from './cli/cli-app.js';
import { GenerateCommand } from './cli/commands/generate-command.js';
import { HelpCommand } from './cli/commands/help-command.js';
import { ImportCommand } from './cli/commands/import-command.js';
import { VersionCommand } from './cli/commands/version-command.js';

import 'reflect-metadata';

import { createApplicationContainer } from './container.js';
import { Component } from './types/component.enum.js';

const container = createApplicationContainer();

const cli = new CliApp();

cli.registerCommands([
  new HelpCommand(),
  new VersionCommand(),
  container.get<ImportCommand>(Component.ImportCommand),
  new GenerateCommand()
]);

try {
  await cli.run(process.argv.slice(2));
} catch (error: unknown) {
  const message = error instanceof Error
    ? error.message
    : String(error);

  console.error(chalk.red(`Ошибка: ${message}`));
  process.exitCode = 1;
}
