import type { CliCommand } from './cli-command.interface.js';

import { readOffers } from '../../shared/tsv-file-reader.js';

import { inject, injectable } from 'inversify';

import type { OfferService } from '../../shared/modules/offer/offer.service.interface.js';
import { Component } from '../../types/component.enum.js';
import type { UserService } from '../../shared/modules/user/user.service.interface.js';
import type { DatabaseClient } from '../../shared/database/database-client.interface.js';

@injectable()
export class ImportCommand implements CliCommand {
  constructor(
    @inject(Component.OfferService)
    private readonly offerService: OfferService,

    @inject(Component.UserService)
    private readonly userService: UserService,

    @inject(Component.DatabaseClient)
    private readonly databaseClient: DatabaseClient
  ) {}

  public readonly name = '--import';

  public async run(...args: string[]): Promise<void> {
    const filePath = args[0];
    const databaseUri = args[1];

    if (!filePath) {
      throw new Error('Не указан путь к TSV-файлу');
    }

    if (!databaseUri) {
      throw new Error('Не указан адрес MongoDB');
    }

    await this.databaseClient.connect(databaseUri);

    await readOffers(filePath, async (offer) => {
      const authorId = await this.userService.findOrCreate(offer.author);

      await this.offerService.create(offer, authorId);
    });
  }
}
