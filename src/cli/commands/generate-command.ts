import type { CliCommand } from './cli-command.interface.js';

import { loadMockOffers } from '../../shared/load-mock-offers.js';
import { writeOffers } from '../../shared/write-offers.js';

export class GenerateCommand implements CliCommand {
  public readonly name = '--generate';

  public async run(...args: string[]): Promise<void> {
    const [countValue, filePath, url] = args;

    if (!countValue || !filePath || !url) {
      throw new Error(
        'Использование: --generate <n> <filepath> <url>'
      );
    }

    const count = Number(countValue);

    if (!Number.isInteger(count) || count <= 0) {
      throw new Error(
        'Количество предложений должно быть положительным целым числом'
      );
    }

    const mockOffers = await loadMockOffers(url);

    if (mockOffers.length === 0) {
      throw new Error('JSON Server не вернул данные для генерации');
    }

    await writeOffers(count, filePath, mockOffers);

    console.log(
      `Сгенерировано предложений: ${count}. Файл: ${filePath}`
    );
  }
}
