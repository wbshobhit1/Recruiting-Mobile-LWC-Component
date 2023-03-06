import { LightningElement } from 'lwc';

export default class TrainingScore extends LightningElement {

    msg="";

    show()
    {
        var fscore = parseInt(this.template.querySelector(".FT").value);
        var tscore = parseInt(this.template.querySelector(".TT").value);
        var pscore = parseInt(this.template.querySelector(".PT").value);

        var primary = (fscore+tscore)*0.6;
        var cs = pscore*0.4;
        var tot = primary+cs;

        if(tot>60)
            this.msg="Successfully Cleared The Training";
        else
            this.msg="Please Take the Re-Test";
    }
}