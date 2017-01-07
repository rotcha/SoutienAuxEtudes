/**
 * Created by louly on 2017-01-02.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PolyHackApp} from './app-main.component';
import {PolyHackInfo} from './app-home/polyhackInfo.component';
import {AboutComponent} from './app-about/about.component';
import {Tutorat} from './app-tutorat/tutorat.component';
import {ConnexionComponent} from "./app-connexion/connexion.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [PolyHackApp,
                    PolyHackInfo,
				    AboutComponent,
				   Tutorat,
                    ConnexionComponent
				   ],
    bootstrap: [PolyHackApp]
})
export class AppModule { }