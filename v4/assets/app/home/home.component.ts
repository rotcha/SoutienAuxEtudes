import {Component, OnInit} from "@angular/core";
import {AdsItem, AdsList} from "./ads.model";
/**
 * Created by louly on 2017-01-17.
 */

@Component({
    selector:'app-home',
    templateUrl:'./home.template.html',
    styleUrls:['./home.style.css']
})
export class HomeComponent implements OnInit
{
    Name:string ;
    Ads:AdsList;
    ngOnInit()
    {
        this.Name='HOMECOMPONENT';
        this.Ads = new AdsList( [
            new AdsItem('Questionnaires','Questionnaires',['Trouvez les questionnaires aux derniers examens et quiz'],'images/test.jpg'),
            new AdsItem('Lab-hack','Laboratoires',['Trouvez les solutions aux derniers laboratoires'],'images/lab.png'),
            new AdsItem('Tutorat en ligne','Obtenez une solution en ligne',['Forum d\'entraide en ligne'],'images/math.jpg'),
            new AdsItem('En équipe!','Environnement de travail collaboratif',['Travailler en equipe avec des outils puissants'],'images/team.jpg')

        ]);
    }
}