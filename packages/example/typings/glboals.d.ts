import type { Mono } from '@gameastic/mono';
import type { Mono as MonoType } from '../src/types';

export declare global {
    interface IUserSerialized {
        coins: number;
        bio: IUserBioSerialized;
    }

    interface IUserBioSerialized {
        name: string;
        age: number;
    }

    interface IGameSerialized {
        settings: IGameSettingsSerialized;
        level: number;
    }

    interface IGameSettingsSerialized {
        sound: boolean;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Window {
        mono: Mono<MonoType.IEvents, MonoType.IStore>;
    }
}
