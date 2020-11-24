import { ListItem} from './listitem';
import { ListItemAny} from './listitemany'

export class ListAny
{
    list: Array<ListItemAny>;
    name: string;

    constructor(_name: string)
    {
        this.name = _name;
        this.list = new Array<ListItemAny>();
    }

    
    public Add(_id: any, _value:string):void
    {
        let item = new ListItemAny(_id,_value);
        this.list.push(item);
    }


}