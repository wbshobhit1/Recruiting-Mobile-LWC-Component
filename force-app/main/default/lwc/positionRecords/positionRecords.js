import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import showPositions from '@salesforce/apex/PositionController.showPositions';
import deletePositions from '@salesforce/apex/PositionController.deletePositions';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class PositionRecords extends NavigationMixin(LightningElement){
    
    datafound = false;
    poslist=[];
    tabcols=[];

    renderedCallback()
    {
        showPositions().then(result =>{

            for(var i=0;i<result.length;i++)
            {
                result[i].recpath="/"+result[i].Id;
            }
            this.tabcols=[
                {label:"Position",fieldName:"recpath",type:"url",typeAttributes:{label:{fieldName:"Name"},tooltip:{fieldName:"Name"},target:"_blank"}},
                {label:"Department",fieldName:"Department__c",type:"text"},
                {label:"Status",fieldName:"Status__c",type:"Number"},
                {type:"action",typeAttributes:{rowActions:[{label:"edit",name:"edit"},{label:"delete",name:"delete"}]}}
            ];
            this.poslist = result;
            this.datafound = true;
        }).catch(error =>{
            console.log(error);
        });
    }

    addposition()
    {
        var pospage={type:"standard__objectPage", attributes:{objectApiName:"Position__c",actionName:"new"}};
        this[NavigationMixin.Navigate](pospage);
    }

    executeaction(event)
    {
        var recid = event.detail.row.Id;
        if(event.detail.action.name=="edit")
        {
            var pospage={type:"standard__recordPage",attributes:{recordId:recid,actionName:"edit"}};
            this[NavigationMixin.Navigate](pospage);
        }

        if(event.detail.action.name=="delete")
        {
            deletePositions({"posid":recid}).then(result =>{

                if(result="position deleted")
                {
                    var ev = new ShowToastEvent({title:"Case Study Alert",
                    message:"Position message deleted successfully",variant:"success"});
                    this.dispatchEvent(ev);
                }
            }).catch(error =>{
                console.log(error);
            });
        }
    }
    
}