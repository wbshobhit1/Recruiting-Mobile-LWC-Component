import { LightningElement } from 'lwc';

export default class DetailsHome extends LightningElement {

    postable=true;
    candtable=false;
    pbutton = "brand";
    cbutton = "neutral";
    showpositions()
    {
        this.postable = true;
        this.candtable = false;
        this.pbutton = "brand";
        this.cbutton="neutral";
    }
    showcandidates()
    {
        this.postable = false;
        this.candtable = true;
        this.pbutton = "neutral";
        this.cbutton="brand";
    }
}