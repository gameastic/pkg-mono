import { MonoLogger } from '@gameastic/mono';
import type { Mono } from '../types';

export const enableMonoLoggerCommand = (_store: Mono.IStore): void => {
    void new MonoLogger(window.mono);
};
