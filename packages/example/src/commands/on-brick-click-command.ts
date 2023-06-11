import { isActiveBrickGuard } from '../guards/is-active-brick-gurad';
import type { Mono } from '../types';
import { setBrickLivesCommand } from './set-brick-lives-command';

export const onBrickClickCommand = (store: Mono.IStore, index: number): void => {
    const brickModel = store.game.bricks[index];

    void window.mono.command
        //
        .payload(brickModel, brickModel.lives - 1)
        .guard(isActiveBrickGuard)
        .execute(setBrickLivesCommand);
};
