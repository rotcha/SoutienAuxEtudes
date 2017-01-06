/**
 * Created by louly on 2017-01-06.
 */
import {Component} from '@angular/core';

@Component({
    selector:'tutorat',
    templateUrl:'app/app-tutorat/tutorat-template.html'

})

export class Tutorat
{
    user:string = 'Demo';
   /* RequestMode :['Student','Teacher'];*/
    requestType= 'Student';
    liveSessionId:string;
    videoUrl:string;
    isLive:boolean;
    liveContent:string;
    postContent(){

    }
    getLiveUsers()
    {

    }
    sendRequest()
    {

    }
}