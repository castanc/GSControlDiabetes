//import { ListItem } from './models/listitem';
import { ListItemAny } from './models/listitemany';
import { ListAny} from './models/listany';
//import { List} from './models/list';

function loadContent(recType:string)
{
    var html = "";
    recType = recType.toUpperCase();
    if ( recType=="GLUC")
    {
        html = `  <div class="form-row">
        <div class="form-group col-md-8">
            <label for="GLUCOSE">Glucose Level</label>
            <input type="number" class="form-control" id="GLUCOSE" name="GLUCOSE"
                placeholder="Glucose level from NEO">
        </div>
    </div>`
    }
    else if ( recType=="EXE")
    {
        html = `<div class="form-row">
        <div class="form-group col-md-8">
            <label for="DISTANCE">Distance</label>
            <input type="number" class="form-control" id="DISTANCE" name="DISTANCE"
                placeholder="Enter distance in meters." pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" 
                required>
        </div>
        <div class="form-group col-md-8">
            <label for="TIME">Duration</label>
            <input type="number" id="HORA" name="TIME" placeholder="Enter duration in minutes"
                pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" class="inputs time"
                required>
        </div>
    </div>
    `
    }
    return html;
}

function loadForm(formName)
{
    var html = "";
    if ( formName == "home")
    {
        var recType = loadRecTypes();
        html =`<p class="h4 mb-4 text-center">Control Diabetes</p>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="FECHA">Fecha</label>
                <input type="date" class="form-control" id="FECHA" name="FECHA"
                    placeholder="Sheet File Name">
            </div>
            <div class="form-group col-md-6">
                <label for="HORA">Hora</label>
                <input type="time" id="HORA" name="HORA" placeholder="HH:MM"
                    pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" class="inputs time"
                    required>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="REC_TYPE">Record Type</label>
            </div>
            <div class="form-group col-md-6">
                <div id="REC_TYPE" class="form-control">
                ${recType}
                </div>
            </div>
        
        </div>
        
        <div id="content" class="box">
        
        </div>
        `
    }
    return html;
}

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
    return  `<select id="SELECT_REC_TYPE" onChange="recTypeChanged('REC_TYPE',this.options[this.selectedIndex].value)">${options}</select>`; 
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

let colClass = "col-md-8";

