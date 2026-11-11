import { inject, injectable } from 'inversify';
import mongoose from 'mongoose';

import type { Config } from '../config/config.interface.js';
import type { Logger } from '../logger/logger.interface.js';
import { Component } from '../../types/component.enum.js';
import type { DatabaseClient } from './database-client.interface.js';

@injectable()
export class DatabaseClientService implements DatabaseClient {
  constructor(
    @inject(Component.Logger)
    private readonly logger: Logger,
    @inject(Component.Config)
    private readonly config: Config
  ) {}

  public async connect(uri?: string): Promise<void> {
    const dbHost = this.config.getDbHost();

    const databaseUri =
            uri ?? `mongodb://${dbHost}:27017/six-cities`;

    this.logger.info(`Попытка подключения к MongoDB: ${databaseUri}`);

    await mongoose.connect(databaseUri, {
      serverSelectionTimeoutMS: 5000
    });

    this.logger.info('Подключение к MongoDB установлено');
  }
}
