import type { BrickModel } from '../models/brick-model';
import type { Mono } from '../types';

export const setBrickLivesCommand = (store: Mono.IStore, brick: BrickModel, lives: number): void => {
    brick.setLives(lives);
};
