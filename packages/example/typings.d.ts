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

declare global {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Window {
        mono: import('@gameastic/mono').Mono<import('./src/types').Mono.IEvents, import('./src/types').Mono.IStore>;
    }

    const mono: Window['mono'];
}

export {};
