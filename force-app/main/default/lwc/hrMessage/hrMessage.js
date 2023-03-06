import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class HrMessage extends LightningElement {
    boxvisible=true;
    pinbox=null;

    closebox()
    {
        var pin = this.pinbox.value;
        if(pin == "1234")
        {
            this.boxvisible=false;
            var ev = new ShowToastEvent({title:"Case Study Alert",
                    message:"Welcome Admin",variant:"success"});
                    this.dispatchEvent(ev);
        }
        else
        {
            var ev = new ShowToastEvent({title:"Case Study Login Error",
                    message:"Invalid PIN... Please check",variant:"error"});
                    this.dispatchEvent(ev);
        }
        
    }

    validatepin(event)
    {
        this.pinbox = event.target;

        if(this.pinbox.validity.valid == true)
        {
            this.template.querySelector(".B1").disabled=false;
            this.template.querySelector(".B2").disabled=false;
        }
        else
        {
            this.template.querySelector(".B1").disabled=true;
            this.template.querySelector(".B2").disabled=true;
        }
    }
}