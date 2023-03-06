import { LightningElement } from 'lwc';

export default class StageSearch extends LightningElement {

    searchstage()
    {
        var stext = this.template.querySelector(".ST").value;

        var ev = new CustomEvent("stagesearch",{detail:stext});
        this.dispatchEvent(ev);

    }
}