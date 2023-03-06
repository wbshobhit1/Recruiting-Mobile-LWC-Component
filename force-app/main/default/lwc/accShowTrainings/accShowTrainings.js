import { LightningElement } from 'lwc';

export default class AccShowTrainings extends LightningElement {

    trainingdata=[];

    showTrainings()
    {
        var btn = this.template.querySelector(".B1");
        if(btn.label=="Show")
        {
            this.trainingdata=["LWC","Enisten Analytics","Aura","Admin"];
            btn.label="Clear";
            btn.variant="destructive";
        }
        else{
            this.trainingdata=[];
            btn.label="Show";
            btn.variant="brand";
        }
        
    }

    get trgfound()
    {
        return this.trainingdata.length > 0;
    }
}