import { Container } from 'inversify';

import { Application } from './app/application.js';
import type { Config } from './shared/config/config.interface.js';
import { ConfigService } from './shared/config/config.service.js';
import type { Logger } from './shared/logger/logger.interface.js';
import { LoggerService } from './shared/logger/logger.service.js';
import { Component } from './types/component.enum.js';

export function createApplicationContainer(): Container {
  const container = new Container();

  container
    .bind<Application>(Component.Application)
    .to(Application)
    .inSingletonScope();

  container
    .bind<Logger>(Component.Logger)
    .to(LoggerService)
    .inSingletonScope();

  container
    .bind<Config>(Component.Config)
    .to(ConfigService)
    .inSingletonScope();

  return container;
}
