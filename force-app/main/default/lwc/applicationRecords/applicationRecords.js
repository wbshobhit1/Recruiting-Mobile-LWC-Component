import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import showApplications from '@salesforce/apex/JobApplicationController.showApplications';

export default class ApplicationRecords extends LightningElement {

    datafound=false;
    applist=[];
    tabcols=[] ;

    connectedCallback()
    {
        
        showApplications().then(result=>{
            
            for(var i=0;i<result.length;i++){

                if(result[i].Position__r)
                {
                    result[i].posname = result[i].Position__r.Name;
                }
                if(result[i].Candidate__r)
                {
                    result[i].candname = result[i].Candidate__r.First_Name__c+" "+result[i].Candidate__r.Last_Name__c;
                }
            }
            for(var i=0;i<result.length;i++)
            {
                result[i].recpath="/"+result[i].Id;
            }
            this.tabcols =[
                {label:"App No",fieldName:"recpath",type:"url",typeAttributes:{label:{fieldName:"Name"},tooltip:{fieldName:"Name"},target:"_blank"}},
                {label:"Position",fieldName:"posname",type:"text"},
                {label:"Candidate",fieldName:"candname",type:"text"},
                {label:"Status",fieldName:"Status__c",type:"text"},
                {label:"Stage",fieldName:"Stage__c",type:"text"}
        ];
            this.applist = result;
            this.datafound = true;
        }).catch(error=>{
            console.log(error);
        });
    }

    // addapplication()
    // {
    //     var apppage={type:"standard__objectPage", attributes:{objectApiName:"Job_Application__c",actionName:"new"}};
    //     this[NavigationMixin.Navigate](apppage);
    // }
    // executeaction(event)
    // {
    //     var recid = event.detail.row.Id;
    //     if(event.detail.action.name=="edit")
    //     {
    //         var apppage={type:"standard__recordPage",attributes:{recordId:recid,actionName:"edit"}};
    //         this[NavigationMixin.Navigate](apppage);
    //     }
    // }
}