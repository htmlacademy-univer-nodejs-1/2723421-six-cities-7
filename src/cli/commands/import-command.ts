import type { CliCommand } from './cli-command.interface.js';

import { readOffers } from '../../shared/tsv-file-reader.js';

export class ImportCommand implements CliCommand {
  public readonly name = '--import';

  public async run(...args: string[]): Promise<void> {
    const filePath = args[0];

    if (!filePath) {
      throw new Error('Не указан путь к TSV-файлу');
    }

    await readOffers(filePath, (offer) => {
      console.log(offer);
    });
  }
}
