export class UserModel {
    private _name!: string;

    public get name(): string {
        return this._name;
    }

    protected set name(value: string) {
        this._name = value;
        window.mono.model.emit('User:NameUpdate', this._name);
    }

    public initialize(): void {
        this.setName('John');

        window.mono.model.emit('User:Initialized', this);
    }

    public setName(name: string): void {
        this.name = name;
    }
}
