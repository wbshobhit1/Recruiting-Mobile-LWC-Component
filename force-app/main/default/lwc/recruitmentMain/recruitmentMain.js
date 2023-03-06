import { LightningElement } from 'lwc';
import frmfactor from '@salesforce/client/formFactor';
export default class RecruitmentMain extends LightningElement {

    get phonedevice()
    {
        return frmfactor=="Small";
    }

    get tabordesktopdevice()
    {
        return frmfactor=="Medium" || frmfactor=="Large";
    }
}