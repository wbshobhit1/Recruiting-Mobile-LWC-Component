import { LightningElement } from 'lwc';
import searchRecords from '@salesforce/apex/JobApplicationController.searchRecords';
export default class StageDisplay extends LightningElement {

    applist=[];
    tabcols=[
        {label:"App No",fieldName:"Name",type:"text"},
        {label:"Status",fieldName:"Status__c",type:"text"},
        {label:"Stage",fieldName:"Stage__c",type:"text"}
    ] ;

    handledata(event)
    {
        var stginfo = event.detail;
        searchRecords({"stgname":stginfo}).then(result =>{
            this.applist = result;
        }).catch(error =>{
            console.log(error);
        });
    }
}