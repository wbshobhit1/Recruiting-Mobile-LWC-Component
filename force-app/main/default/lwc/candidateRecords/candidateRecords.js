import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import showCandidates from '@salesforce/apex/CandidateController.showCandidates';
import deleteCandidates from '@salesforce/apex/CandidateController.deleteCandidates';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CandidateRecords extends NavigationMixin(LightningElement) {

    datafound = false;
    candlist=[];
    
    tabcols=[];
        
    renderedCallback()
    {
        showCandidates().then(result =>{

            for(var i=0;i<result.length;i++)
            {
                result[i].recpath="/"+result[i].Id;
            }
            this.tabcols=[
                {label:"Cand No",fieldName:"recpath",type:"url",typeAttributes:{label:{fieldName:"Name"},tooltip:{fieldName:"Name"},target:"_blank"}},
                {label:"First Name",fieldName:"First_Name__c",type:"text"},
                {label:"Last Name",fieldName:"Last_Name__c",type:"text"},
                {label:"Email",fieldName:"Email__c",type:"email"},
                {type:"action",typeAttributes:{rowActions:[{label:"edit",name:"edit"},{label:"delete",name:"delete"}]}}
            ] ;
            this.candlist = result;
            this.datafound = true;
        }).catch(error =>{
            console.log(error);
        });
    }

    addcandidate()
    {
        var candpage={type:"standard__objectPage", attributes:{objectApiName:"Candidate__c",actionName:"new"}};
        this[NavigationMixin.Navigate](candpage);
    }

    executeaction(event)
    {
        var recid = event.detail.row.Id;
        if(event.detail.action.name=="edit")
        {
            var candpage={type:"standard__recordPage",attributes:{recordId:recid,actionName:"edit"}};
            this[NavigationMixin.Navigate](candpage);
        }

        if(event.detail.action.name=="delete")
        {
            deleteCandidates({"candid":recid}).then(result =>{

                if(result="candidate deleted")
                {
                    var ev = new ShowToastEvent({title:"Case Study Alert",
                    message:"Candidate message deleted successfully",variant:"success"});
                    this.dispatchEvent(ev);
                }
            }).catch(error =>{
                console.log(error);
            });
        }
    }
}