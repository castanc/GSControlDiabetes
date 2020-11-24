export class ListItem<T>
{
    id: T;
    value: string;

    constructor(_id: T, _value: string)
    {
        this.id = _id;
        this.value = _value;
    }
}