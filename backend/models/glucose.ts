import {BaseRecord} from './baserecord'

export class  Glucose extends BaseRecord{
    value: number;

    constructor(form)
    {
        super(form);
        this.value = form.GLUCOSE;
    }

}