"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by louly on 2017-01-03.
 */
var core_1 = require("@angular/core");
/*import  {LabsComponent} from './app-labs/labs.component';*/
/*import  {TeamWorkComponent} from './app-team/labs.component';*/
var PolyHackApp = (function () {
    function PolyHackApp() {
        this.currentView = 'info';
    }
    PolyHackApp.prototype.changeView = function (view) {
        this.currentView = view;
    };
    return PolyHackApp;
}());
PolyHackApp = __decorate([
    core_1.Component({
        selector: 'polyhack',
        templateUrl: 'app/app-main-template.html'
    }),
    __metadata("design:paramtypes", [])
], PolyHackApp);
exports.PolyHackApp = PolyHackApp;
//# sourceMappingURL=app-main.component.js.map