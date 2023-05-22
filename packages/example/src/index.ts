import { Mono } from '@gameastic/mono';
import { enableMonoLoggerCommand } from './commands/enable-mono-logger-command';
import { initializeStoreCommand } from './commands/initialize-store-command';
import { initializeViewCommand } from './commands/initialize-view-command';
import { mapGameEventsCommand } from './commands/map-game-events-command';
import { StoreModel } from './models/store-model';
import { Mono as MonoType } from './types';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        window.mono = new Mono<MonoType.IEvents, MonoType.IStore>(new StoreModel());

        void window.mono.command.execute(mapGameEventsCommand);
        void window.mono.command.execute(enableMonoLoggerCommand);
        void window.mono.command.execute(initializeStoreCommand);
        void window.mono.command.execute(initializeViewCommand);
    },
    false
);
