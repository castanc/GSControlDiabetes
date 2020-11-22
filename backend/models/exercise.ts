import {BaseRecord} from './baserecord'

export class  Excercise extends BaseRecord{
    distance: number;
    duration: number;

    constructor(form)
    {
        super(form);
        this.distance = form.DISTANCE;
        this.duration = form.DURATION;
    }
}