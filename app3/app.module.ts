/**
 * Created by louly on 2017-01-02.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PolyHackInfo} from './polyhackInfo.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [PolyHackInfo],
    bootstrap: [PolyHackInfo]
})
export class AppModule { }