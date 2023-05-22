import { MonoEmitter } from './emitter';
import { type Events, type EventType, type IEventSubscriber, type ParamsType } from './types';

export class MonoModel<EE extends Events> extends MonoEmitter<EE> {
    public constructor(private readonly _subscriber: IEventSubscriber<any>) {
        super();
    }

    public emit<E extends EventType<EE>>(evt: E, ...params: ParamsType<EE, E>): void {
        this._subscriber.onEvent(evt, params);

        super.emit(evt, ...params);
    }
}
