import {Component} from
    '@angular/core';
@Component({
    selector:'info',
    templateUrl:'app/app-home/info-template.html' //'app/app-home/polyhack-template.html'
})

export class PolyHackInfo {

    public infos =[
        {
            name:'Questionnaires',
            description :'Questionnaires',
            details :'Trouvez les questionnaires aux derniers examens et quiz',
			image:'public/images/test.jpg'
        },
        {
            name:'Lab-crack',
            description :'Laboratoires',
            details :'Trouvez les solutions aux derniers laboratoires',
			image:'public/images/lab.png'
        }
        ,
        {
            name:'Tutorat en ligne',
            description :'Tutorat',
            details :'Obtenez de laide grace pour vos cours',
			image:'public/images/math.jpg'
        },
        {
            name:'Environnement collaboratif',
            description :'Travail en equipe',
            details :'Travailler en equipe avec des outils puissants',
			image:'public/images/team.jpg'
        },
    ]
}