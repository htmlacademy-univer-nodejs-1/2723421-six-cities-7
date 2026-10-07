import { readFile } from 'node:fs/promises';

import type { CliCommand } from './cli-command.interface.js';
import chalk from 'chalk';

export class VersionCommand implements CliCommand {
  public readonly name = '--version';

  public async run(): Promise<void> {
    const packageJson = await readFile('package.json', 'utf-8');
    const packageData = JSON.parse(packageJson);

    console.log(chalk.green(packageData.version));
  }
}
