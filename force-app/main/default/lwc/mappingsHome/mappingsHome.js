import { LightningElement } from 'lwc';

export default class MappingsHome extends LightningElement {

    apprecords=true;
    appnew=false;
    appsearch=false;
    appstatus=false;

    callactions(event)
    {
        var menu = event.detail;

        if(menu.value == "1")
        {
            this.apprecords=false;
            this.appnew=true;
            this.appsearch=false;
            this.appstatus=false;
        }

        if(menu.value == "4")
        {
            this.apprecords=true;
            this.appnew=false;
            this.appsearch=false;
            this.appstatus=false;
        }

        if(menu.value == "2")
        {
            this.apprecords=false;
            this.appnew=false;
            this.appsearch=true;
            this.appstatus=false;
        }

        if(menu.value == "3")
        {
            this.apprecords=false;
            this.appnew=false;
            this.appsearch=false;
            this.appstatus=true;
        }
    }

    reload(event)
    {
        if(event.detail=="cancel")
        {
            this.apprecords=true;
            this.appnew=false;
            this.appsearch=false;
            this.appstatus=false;
        }
    }
}