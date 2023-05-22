import { BrickModel } from '../models/brick-model';

export class BrickView {
    public readonly div: HTMLDivElement;
    public readonly text: HTMLSpanElement;

    public constructor(model: BrickModel) {
        this.div = document.createElement('div');
        this.div.style.cursor = 'pointer';
        this.div.onclick = () => {
            this._onBrickClick(model.index);
        };

        this.text = document.createElement('span');
        this.text.innerHTML = `${model.lives}`;
        this.div.appendChild(this.text);
    }

    public onLivesUpdate(lives: number): void {
        this.text.innerHTML = `${lives}`;
        this.text.style.opacity = `${Math.min(lives, 1)}`;
    }

    private _onBrickClick(index: number): void {
        window.mono.view.emit('Brick:Click', index);
    }
}
