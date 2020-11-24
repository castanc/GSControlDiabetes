import { BaseRecord } from "../backend/models/baserecord";
import { Excercise } from "../backend/models/exercise";
import { Glucose } from "../backend/models/glucose";

export class Business{

    dataAccessKey = "jsonfiles";

    constructor(){
        
    }

    recordFactory(recType:string, form):BaseRecord
    {
        //recType = recType.toUpperCase();
        let br;
        if ( recType == "GLUC")
            br = new Glucose(form);
        else if ( recType == "EXE")
            br = new Excercise(form);
        else
            br  = new BaseRecord(form);
        return br;
    }
        
}