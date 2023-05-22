import { Mono } from '../src/mono';

interface IStore {
    level: number;
}

interface IEvents {
    view: {
        event1: {
            test: {
                event: 'Test:ViewTest1';
                params: Parameters<(arg1: number, arg2: string) => void>;
            };
        };
        event2: {
            test: {
                event: 'Test:ViewTest2';
                params: Parameters<() => void>;
            };
        };
    };

    model: {
        event3: {
            test: {
                event: 'Test:ModelTest1';
                params: Parameters<(arg1: number, arg2: string) => void>;
            };
        };
        event4: {
            test: {
                event: 'Test:ModelTest2';
                params: Parameters<() => void>;
            };
        };
    };
}

const store: IStore = { level: 3 };
const mono = new Mono<IEvents, IStore>(store);

test('Mono', () => {
    expect(mono).toHaveProperty('store');
    expect(mono).toHaveProperty('command');
    expect(mono).toHaveProperty('model');
    expect(mono).toHaveProperty('view');
});

test('Event on', () => {
    const listener = (num: number, str: string): void => {
        expect(num).toBe(1);
        expect(str).toBe('arg');
    };
    mono.view.on('Test:ViewTest1', listener);
    mono.view.emit('Test:ViewTest1', 1, 'arg');

    mono.view.off('Test:ViewTest1', listener);
});

test('Event off', () => {
    const listener = (): void => {
        throw new Error('Handling removed event');
    };
    mono.view.on('Test:ViewTest2', listener);
    mono.view.off('Test:ViewTest2', listener);
    mono.view.emit('Test:ViewTest2');
});

test('Command on', () => {
    const command = (arg1: IStore, num: number, str: string): void => {
        expect(arg1).toBe(store);
        expect(num).toBe(1);
        expect(str).toBe('arg');
    };

    mono.command.map('Test:ModelTest1', command);
    mono.model.emit('Test:ModelTest1', 1, 'arg');

    mono.command.unmap('Test:ModelTest1');
});

test('Command off', () => {
    const command = (): void => {
        throw new Error('Executing unmaped command');
    };

    mono.command.map('Test:ModelTest2', command);
    mono.command.unmap('Test:ModelTest2');
    mono.model.emit('Test:ModelTest2');
});

test('Payload', () => {
    const command = (arg1: IStore, arg2: number, arg3: string, arg4: boolean): void => {
        expect(arg1).toBe(store);
        expect(arg2).toBe(1);
        expect(arg3).toBe('2');
        expect(arg4).toBe(true);
    };

    void mono.command.payload(1, '2', true).execute(command);
});

test('Guard', () => {
    const commandUnguarded = (arg1: IStore): void => {
        expect(arg1).toBe(store);
    };

    const commandGuarded = (_arg1: IStore): void => {
        throw new Error('Executing guarded command');
    };

    void mono.command.guard(() => true).execute(commandUnguarded);
    void mono.command.guard(() => false).execute(commandGuarded);
});
