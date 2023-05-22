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

        mono.command.execute(mapGameEventsCommand);
        mono.command.execute(enableMonoLoggerCommand);
        mono.command.execute(initializeStoreCommand);
        mono.command.execute(initializeViewCommand);
    },
    false
);
