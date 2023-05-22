import { BrickModel } from '../models/brick-model';
import { Mono } from '../types';

export const isActiveBrickGuard = (store: Mono.IStore, brick: BrickModel): boolean => {
    return brick.lives > 0;
};
