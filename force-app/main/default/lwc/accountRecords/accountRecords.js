import { LightningElement } from 'lwc';
import showacc from '@salesforce/apex/AccountController.showAccounts';
export default class AccountRecords extends LightningElement {

    acclist=[];
    tabcols=[
        {label:"Account Name",fieldName:"Name",type:"text"},
        {label:"Account City",fieldName:"BillingCity",type:"text"},
        {label:"Account State",fieldName:"BillingState",type:"Number"}
    ];

    show()
    {
        showacc().then(result =>{
            this.acclist=result;
        }).catch(error =>{
            console.log(error);
        });
    }
}