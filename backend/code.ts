//import { ListItem } from './models/listitem';
import { ListItemAny } from './models/listitemany';
import { ListAny} from './models/listany';
//import { List} from './models/list';

function loadRecTypes():string
{
    let list = new ListAny("rectypes");
    list.Add("GLUC","Glucose");
    list.Add("EXE","Exercise");

    var options = "";
    for(var i=0; i< list.list.length; i++)
    {
        options = options + `<option value="${list.list[i].id}">${list.list[i].value}</option>`
    }
    return  `<select onChange="recTypeChanged(this.options[this.selectedIndex].value)">${options}</select>`; // JSON.stringify(list);
}

function doGet(e) {
    return HtmlService.createTemplateFromFile('frontend/index').evaluate();
}

function doHome():string{
    return `<div class="row">
    <div class="col-6">
        <form id="myForm" onsubmit="handleFormSubmit(this)">
            <p class="h4 mb-4 text-center">Control Diabetes</p>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="FECHA">Fecha</label>
                    <input type="date" class="form-control" id="FECHA" name="FECHA" placeholder="Sheet File Name">
                </div>
                <div class="form-group col-md-6">
                    <label for="HORA">Hora</label>
                    <input type="time" id = "HORA" name="HORA" placeholder="HH:MM" pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" class="inputs time" required>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="REC_TYPE">Record Type</label>
                </div>
                <div class="form-group col-md-6">
                    <div id="REC_TYPE" class="form-control">
                    </div>
                </div>

            </div>

            <div id = "content">

            </div>

            <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
    </div>
</div>      
`
}
/* @Include JavaScript and CSS Files */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent(); 303
}

