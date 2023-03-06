import { LightningElement } from 'lwc';

export default class ApplicationNewRecords extends LightningElement {

    msg="";

    showSuccess(event)
    {
        this.msg = "Record Successfully Loaded from Id"+event.detail.id;
    }

    cancelform()
    {
        var ev = new CustomEvent("cancelform",{detail:"cancel"});
        this.dispatchEvent(ev);
    }
}