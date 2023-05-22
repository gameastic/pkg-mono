import { BrickModel } from './brick-model';

export class GameModel {
    private _bricks!: BrickModel[];

    public get bricks(): BrickModel[] {
        return this._bricks;
    }

    protected set bricks(value: BrickModel[]) {
        this._bricks = value;
        mono.model.emit('Game:BricksUpdate', this._bricks);
    }

    public initialize(): void {
        this.setBricks([
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
            new BrickModel(),
        ]);

        mono.model.emit('Game:Initialized', this);
    }

    public setBricks(bricks: BrickModel[]): void {
        this.bricks = bricks;
        this.bricks.forEach((brick, index) => brick.initialize(index, 5));
    }
}
