import dotenv from 'dotenv';
import { injectable } from 'inversify';
import convict from 'convict';
import validator from 'convict-format-with-validator';

import type { Config } from './config.interface.js';

dotenv.config();

convict.addFormats(validator);

const configSchema = convict({
  port: {
    doc: 'Порт приложения',
    format: 'port',
    env: 'PORT',
    default: 0
  },

  dbHost: {
    doc: 'IP-адрес сервера базы данных',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: ''
  },

  salt: {
    doc: 'Соль',
    format: (value: string) => {
      if (value.length === 0) {
        throw new Error('SALT обязателен');
      }
    },
    env: 'SALT',
    default: ''
  }
});

configSchema.validate({
  allowed: 'strict'
});

@injectable()
export class ConfigService implements Config {
  public getPort(): number {
    return configSchema.get('port');
  }

  public getDbHost(): string {
    return configSchema.get('dbHost');
  }

  public getSalt(): string {
    return configSchema.get('salt');
  }
}
