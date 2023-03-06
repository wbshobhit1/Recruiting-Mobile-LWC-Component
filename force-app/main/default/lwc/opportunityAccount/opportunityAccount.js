import { LightningElement,api } from 'lwc';
import oppacc from '@salesforce/apex/OpportunityController.showParentAccountInfo';
export default class OpportunityAccount extends LightningElement {

    @api recordId;

    oppdata= null;

    connectedCallback()
    {
        oppacc({"oppid":this.recordId}).then(result =>{
            this.oppdata = result;
        });
    }

    get datafound()
    {
        return this.oppdata != null;
    }

}