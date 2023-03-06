import { LightningElement } from 'lwc';

export default class AccNominate extends LightningElement {
    pname="";
    rescount=0;
    msg="";

    inproject(event)
    {
        this.pname = event.target.value;
    }

    inres(event)
    {
        this.rescount = event.target.value;
    }

    show()
    {
        if(this.rescount>10)
        {
            this.msg="Cannot Nominate more than 10 project";
        }
        else
        {
            this.msg="Your Project Nomination is Confirmed ";
        }
    }
}