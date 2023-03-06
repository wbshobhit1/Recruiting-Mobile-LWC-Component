import { LightningElement } from 'lwc';
import rec_logo from '@salesforce/resourceUrl/rec_logo';
export default class HomeTab extends LightningElement {

    ilogo = rec_logo;

    applystyle2()
    {
        var dtag = this.template.querySelector(".D1");
        dtag.classList.remove("dstyle1");
        dtag.classList.add("dstyle2");
    }
    resetstyle()
    {
        var dtag = this.template.querySelector(".D1");
        dtag.classList.remove("dstyle2");
        dtag.classList.add("dstyle1");
    }
}