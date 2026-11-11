import { Container } from 'inversify';

import { Application } from './app/application.js';
import type { Config } from './shared/config/config.interface.js';
import { ConfigService } from './shared/config/config.service.js';
import type { Logger } from './shared/logger/logger.interface.js';
import { LoggerService } from './shared/logger/logger.service.js';
import type { DatabaseClient } from './shared/database/database-client.interface.js';
import { DatabaseClientService } from './shared/database/database-client.service.js';
import { Component } from './types/component.enum.js';
import type { UserService } from './shared/modules/user/user.service.interface.js';
import { DefaultUserService } from './shared/modules/user/user.service.js';
import type { OfferService } from './shared/modules/offer/offer.service.interface.js';
import { DefaultOfferService } from './shared/modules/offer/offer.service.js';
import type { CommentService } from './shared/modules/comment/comment.service.interface.js';
import { DefaultCommentService } from './shared/modules/comment/comment.service.js';
import { ImportCommand } from './cli/commands/import-command.js';

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

  container
    .bind<DatabaseClient>(Component.DatabaseClient)
    .to(DatabaseClientService)
    .inSingletonScope();

  container
    .bind<UserService>(Component.UserService)
    .to(DefaultUserService)
    .inSingletonScope();

  container
    .bind<OfferService>(Component.OfferService)
    .to(DefaultOfferService)
    .inSingletonScope();

  container
    .bind<CommentService>(Component.CommentService)
    .to(DefaultCommentService)
    .inSingletonScope();

  container
    .bind<ImportCommand>(Component.ImportCommand)
    .to(ImportCommand)
    .inSingletonScope();

  return container;
}
