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
var core_1 = require("@angular/core");
var PolyHackInfo = (function () {
    function PolyHackInfo() {
        this.infos = [
            {
                name: 'Questionnaires',
                description: 'Questionnaires',
                details: 'Trouvez les questionnaires aux derniers examens et quiz'
            },
            {
                name: 'Lab-crack',
                description: 'Laboratoires',
                details: 'Trouvez les solutions aux derniers laboratoires'
            },
            ,
            {
                name: 'Tutorat en ligne',
                description: 'Tutorat',
                details: 'Trouvez les solutions aux derniers laboratoires'
            },
            {
                name: 'Environnement collaboratif',
                description: 'Travail en equipe',
                details: 'Trouvez les solutions aux derniers laboratoires'
            },
        ];
    }
    return PolyHackInfo;
}());
PolyHackInfo = __decorate([
    core_1.Component({
        selector: 'info',
        templateUrl: 'app/polyhack-template.html'
    }),
    __metadata("design:paramtypes", [])
], PolyHackInfo);
exports.PolyHackInfo = PolyHackInfo;
//# sourceMappingURL=polyhackInfo.component.js.map