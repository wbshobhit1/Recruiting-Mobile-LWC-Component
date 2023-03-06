import { LightningElement, wire } from 'lwc';
import dchannel from '@salesforce/messageChannel/DataChannel__c';
import { publish, MessageContext } from 'lightning/messageService';
export default class StatusBox extends LightningElement {

    @wire(MessageContext) mcon;

    send(event)
    {
        var btnlabel = event.target.label;
        const statusmsg = {msg:btnlabel};
        publish(this.mcon,dchannel,statusmsg);
    }
}