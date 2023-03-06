import { LightningElement, wire } from 'lwc';
import searchRecordByStatus from '@salesforce/apex/JobApplicationController.searchRecordByStatus';
import dchannel from '@salesforce/messageChannel/DataChannel__c';
import { subscribe,MessageContext } from 'lightning/messageService';
export default class RecordBox extends LightningElement {

    @wire(MessageContext) mcon;
    
    jlist=[];
    tabcols=[
        {label:"App No",fieldName:"Name",type:"text"},
        {label:"Status",fieldName:"Status__c",type:"text"},
        {label:"Stage",fieldName:"Stage__c",type:"text"}
    ] ;

    statval="";

    renderedCallback()
    {
        if(this.mcon!=null)
        {
            subscribe(this.mcon,dchannel,(statusmsg =>{
                this.statval = statusmsg.msg;
            }))

            searchRecordByStatus({"rstatus":this.statval}).then(result =>{
                this.jlist = result;
            }).catch(error =>{
                console.log(error);
            });
        }
    }
    
    
}