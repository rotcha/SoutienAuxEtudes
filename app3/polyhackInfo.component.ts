import {Component} from
    '@angular/core';
@Component({
    selector:'info',
    templateUrl:'app3/polyhack-template.html'
})

export class PolyHackInfo {

    public infos =[
        {
            name:'Questionnaires',
            description :'Questionnaires',
            details :'Trouvez les questionnaires aux derniers examens et quiz'
        },
        {
            name:'Lab-crack',
            description :'Laboratoires',
            details :'Trouvez les solutions aux derniers laboratoires'
        }
        ,
        {
            name:'Tutorat en ligne',
            description :'Tutorat',
            details :'Trouvez les solutions aux derniers laboratoires'
        },
        {
            name:'Environnement collaboratif',
            description :'Travail en equipe',
            details :'Trouvez les solutions aux derniers laboratoires'
        },
    ]
}