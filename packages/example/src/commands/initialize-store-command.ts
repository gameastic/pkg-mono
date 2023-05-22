import { GameModel } from '../models/game-model';
import { UserModel } from '../models/user-model';
import { Mono } from '../types';

export const initializeStoreCommand = (store: Mono.IStore): void => {
    const user = new UserModel();
    const game = new GameModel();

    store.setUser(user);
    store.setGame(game);

    store.initialize();
};
