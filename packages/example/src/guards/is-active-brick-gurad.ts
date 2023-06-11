import type { BrickModel } from '../models/brick-model';
import type { Mono } from '../types';

export const isActiveBrickGuard = (store: Mono.IStore, brick: BrickModel): boolean => {
    return brick.lives > 0;
};
