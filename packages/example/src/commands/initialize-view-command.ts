import type { Mono } from '../types';
import { MainView } from '../view/main-view';

export const initializeViewCommand = (_store: Mono.IStore): void => {
    void new MainView();
};
