import { LightningElement,api } from 'lwc';


export default class AccTraning extends LightningElement {
   @api tname="LWC training";
   @api ttype="Developer Training";
   @api tduration=5;

    get devsession()
    {
        return this.tduration>3;
    }

    get consession()
    {
        return this.tduration<=3;
    }
}