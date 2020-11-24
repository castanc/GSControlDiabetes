export class BaseRecord
{
    fecha: Date;
    recType: string;

    constructor(form)
    {
        this.fecha = form.FECHA;   
        this.recType = form.REC_TYPE;
    }

}