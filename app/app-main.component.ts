/**
 * Created by louly on 2017-01-03.
 */
import {Component} from '@angular/core';
import {PolyHackInfo} from './app-home/polyhackInfo.component';
import {AboutComponent} from './app-about/about.component';
import  {Tutorat} from './app-tutorat/tutorat.component';
/*import  {LabsComponent} from './app-labs/labs.component';*/
 /*import  {TeamWorkComponent} from './app-team/labs.component';*/

@Component({
    selector:'polyhack',
    templateUrl:'app/app-main-template.html'
})
export class PolyHackApp{

    currentView:string = 'info';

    changeView(view:string)
    {
        this.currentView = view;
    }
}