import { LightningElement } from 'lwc';
import showcon from '@salesforce/apex/ContactController.showContacts';
import showconfname from '@salesforce/apex/ContactController.showContactsByName'

export default class ContactRecords extends LightningElement {

    conlist=[];
    tabcols=[
        {label:"Contact Fname",fieldName:"FirstName",type:"text"},
        {label:"Contact Lname",fieldName:"LastName",type:"text"},
        {label:"Contact Email",fieldName:"Email",type:"email"}
    ] ;

    connectedCallback()
    {
        showcon().then(result=>{
            this.conlist = result;
        });
    }

    inpfname(event)
    {
        var inptxt = event.target.value;
        showconfname({"fname":inptxt}).then(result=>{
            this.conlist = result;
        });
    }
}