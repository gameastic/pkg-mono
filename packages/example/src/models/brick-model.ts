export class BrickModel {
    private _index!: number;
    private _lives!: number;

    public get index(): number {
        return this._index;
    }

    public get lives(): number {
        return this._lives;
    }

    protected set lives(value: number) {
        this._lives = value;
        window.mono.model.emit('Brick:LivesUpdate', this.index, this.lives);
    }

    public initialize(index: number, lives: number): void {
        this._index = index;
        this._lives = lives;
    }

    public setLives(lives: number): void {
        this.lives = lives;
    }
}
