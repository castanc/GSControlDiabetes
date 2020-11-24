//import { ListItem } from './models/listitem';
import { ListItemAny } from './models/listitemany';
import { ListAny} from './models/listany';
import { BaseRecord } from './models/baserecord';
import { Glucose } from './models/glucose';
import { Excercise } from './models/exercise';
import { Business } from '../business/business';
import { Content } from './render/content';

//import { List} from './models/list';



function loadContent(recType)
{
    let content = new Content();
    return content.loadContent(recType)
}


function loadForm(formName)
{
    let content = new Content();
    return content.loadForm(formName);
}


function doGet(e) {
    return HtmlService.createTemplateFromFile('frontend/index').evaluate();
}

function doHome():string{
    let content = new Content();
    return content.doHome();
}
/* @Include JavaScript and CSS Files */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent(); 303
}


function processForm(formObject) {
    Logger.log("processForm()",formObject);
    try {
        let business = new Business();
        var rec = business.recordFactory(formObject.REC_TYPE, formObject);
        
        /*
        p.SHEET_FILE_NAME = formObject.SHEET_FILE_NAME
        p.MAIL_LIST_FILE_NAME = formObject.MAIL_LIST_FILE_NAME
        p.TEMPLATE_FILE_NAME = formObject.TEMPLATE_FILE_NAME
        p.RESULT_TEMPLATE = formObject.RESULT_TEMPLATE
        p.OUTPUT_FOLDER = formObject.OUTPUT_FOLDER
        p.SUBJECT = formObject.SUBJECT
        p.SENDER_MAIL = formObject.SENDER_MAIL
        p.SENDER_TITLE = formObject.SENDER_TITLE
        p.STAKEHOLDERS_NAMES = formObject.STAKEHOLDERS_NAMES
        */
    }
    catch(ex)
    {
        Logger.log("exception in processForm()",ex);
    }
}

