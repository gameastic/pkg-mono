import type { BrickModel } from '../models/brick-model';
import { BrickView } from './brick-view';

export class MainView {
    private readonly _bricks: BrickView[] = [];

    public constructor() {
        this._buildBricks(window.mono.store.game.bricks);

        window.mono.model.on('Brick:LivesUpdate', this._onBrickLivesUpdate, this);
    }

    private _buildBricks(bricks: BrickModel[]): void {
        const boxDiv = document.getElementById('box') as HTMLDivElement;

        bricks.forEach((brick) => {
            const brickView = new BrickView(brick);
            boxDiv?.appendChild(brickView.div);

            this._bricks.push(brickView);
        });
    }

    private _onBrickLivesUpdate(index: number, lives: number): void {
        const brick = this._bricks[index];
        brick.onLivesUpdate(lives);
    }
}
