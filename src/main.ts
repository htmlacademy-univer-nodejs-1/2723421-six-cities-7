import 'reflect-metadata';

import { Application } from './app/application.js';
import { createApplicationContainer } from './container.js';
import { Component } from './types/component.enum.js';

const container = createApplicationContainer();

const application = container.get<Application>(
  Component.Application
);

await application.init();
