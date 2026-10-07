import type { CliCommand } from './cli-command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements CliCommand {
  public readonly name = '--help';

  public async run(): Promise<void> {
    console.log((chalk.bold`
Доступные команды:
  --help                Показать справку
  --version             Показать версию приложения
  --import <file>       Импортировать предложения из TSV
`));
  }
}
