import { injectable } from 'inversify';
import pino, { type Logger as PinoLogger } from 'pino';

import type { Logger } from './logger.interface.js';

@injectable()
export class LoggerService implements Logger {
  private readonly logger: PinoLogger;

  constructor() {
    this.logger = pino();
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }
}
