import { ListItem} from './listitem';

export class List<T>
{
    list: Array<ListItem<T>>;
    name: string;

    constructor(_name: string)
    {
        this.name = _name;
        this.list = new Array<ListItem<T>>();
    }

    
    public Add<T>(_id: T, _value:string):void
    {
        let item = new ListItem<T>(_id,_value);
        this.list.push(item);
    }


}