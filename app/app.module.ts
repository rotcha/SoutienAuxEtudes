/**
 * Created by louly on 2017-01-02.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PolyHackApp} from './app-main.component';
import {PolyHackInfo} from './polyhackInfo.component';
import {AboutComponent} from './about.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [PolyHackApp,
					PolyHackInfo,
				   AboutComponent
				   ],
    bootstrap: [PolyHackApp]
})
export class AppModule { }