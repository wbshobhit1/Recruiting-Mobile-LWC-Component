import { LightningElement, wire } from 'lwc';
import showoops from '@salesforce/apex/OpportunityController.showOpportunities';
export default class OpportunityRecord extends LightningElement {

    @wire(showoops) wservice;
    opplist=[];
    tabcols=[
        {label:"Opp Name",fieldName:"Name",type:"text"},
        {label:"Opp Stage",fieldName:"StageName",type:"text"},
        {label:"Opp Amount",fieldName:"Amount",type:"Number"}
    ] ;

    show()
    {
        this.opplist = this.wservice.data;
        
    }
}