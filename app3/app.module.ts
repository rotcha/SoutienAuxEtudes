/**
 * Created by louly on 2017-01-02.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PolyHackInfo} from './polyhackInfo.component';
import {AboutModule} from './about/about.module';

@NgModule({
    imports: [BrowserModule],
    declarations: [PolyHackInfo,AboutModule],
    bootstrap: [PolyHackInfo]
})
export class AppModule { }