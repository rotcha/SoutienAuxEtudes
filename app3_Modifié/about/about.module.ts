/**
 * Created by Jenny on 2017-01-03.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {AboutComponent} from "./about.component";
@NgModule({
    imports: [BrowserModule, CommonModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule {};