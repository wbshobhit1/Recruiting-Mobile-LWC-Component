import { LightningElement } from 'lwc';

export default class AccDisplay extends LightningElement {

    applyred()
    {
        var dtag = this.template.querySelector(".D1");
        dtag.style.background = "red";
    }

    applygreen()
    {
        var dtag = this.template.querySelector(".D1");
        dtag.style.background = "green";
    }

    applyblue()
    {
        var dtag = this.template.querySelector(".D1");
        dtag.style.background = "blue";
    }

    reset()
    {
        var dtag = this.template.querySelector(".D1");
        dtag.style.background = "white";
    }
}