import { BrickModel } from './models/brick-model';
import { GameModel } from './models/game-model';
import { type StoreModel } from './models/store-model';
import { UserModel } from './models/user-model';

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Mono {
    interface IStore extends StoreModel {}

    interface IEvents {
        /* VIEW */
        view: {
            brick: {
                click: {
                    event: 'Brick:Click';
                    params: Parameters<(index: number) => void>;
                };
            };
        };

        /* MODEL */
        model: {
            /* Store */
            store: {
                initialized: {
                    event: 'Store:Initialized';
                    params: Parameters<(store: StoreModel) => void>;
                };
            };

            /* User */
            user: {
                initialized: {
                    event: 'User:Initialized';
                    params: Parameters<(user: UserModel) => void>;
                };
                nameUpdate: {
                    event: 'User:NameUpdate';
                    params: Parameters<(name: string) => void>;
                };
            };

            /* Game */
            game: {
                initialized: {
                    event: 'Game:Initialized';
                    params: Parameters<(game: GameModel) => void>;
                };
                bricksUpdate: {
                    event: 'Game:BricksUpdate';
                    params: Parameters<(bricks: BrickModel[]) => void>;
                };
            };

            brick: {
                livesUpdate: {
                    event: 'Brick:LivesUpdate';
                    params: Parameters<(index: number, lives: number) => void>;
                };
            };
        };
    }
}
