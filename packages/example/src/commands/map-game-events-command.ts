import { Mono } from '../types';
import { onBrickClickCommand } from './on-brick-click-command';
import { onGameInitializedCommand } from './on-game-initialized-command';
import { onStoreInitializedCommand } from './on-store-initialized-command';
import { onUserInitializedCommand } from './on-user-initialized-command';

export const mapGameEventsCommand = (_store: Mono.IStore): void => {
    /* model events */
    mono.command.map('User:Initialized', onUserInitializedCommand);
    mono.command.map('Game:Initialized', onGameInitializedCommand);
    mono.command.map('Store:Initialized', onStoreInitializedCommand);

    /* view events */
    mono.command.map('Brick:Click', onBrickClickCommand);
};
