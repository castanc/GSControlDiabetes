import { ItemType } from './itemtype'

export class Item {
    id: number;
    itemType: ItemType;
    name: string;
    quantity: number;
    unit: ItemType;
    image: string;
}