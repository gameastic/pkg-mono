import { MonoLogger } from '@gameastic/mono';
import { Mono } from '../types';

export const enableMonoLoggerCommand = (_store: Mono.IStore): void => {
    void new MonoLogger(mono);
};
