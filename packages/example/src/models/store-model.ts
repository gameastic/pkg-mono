import { type GameModel } from './game-model';
import { UserModel } from './user-model';

export class StoreModel {
    private _user!: UserModel;
    private _game!: GameModel;

    public get game(): GameModel {
        return this._game;
    }

    protected set game(value: GameModel) {
        this._game = value;
    }

    public get user(): UserModel {
        return this._user;
    }

    protected set user(value: UserModel) {
        this._user = value;
    }

    public initialize(): void {
        mono.model.emit('Store:Initialized', this);
    }

    public setUser(user: UserModel): void {
        this.user = user;
        this.user.initialize();
    }

    public setGame(game: GameModel): void {
        this.game = game;
        this.game.initialize();
    }
}
