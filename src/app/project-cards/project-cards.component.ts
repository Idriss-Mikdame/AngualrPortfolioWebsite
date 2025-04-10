import {Component, Input, input, OnInit} from '@angular/core';


@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {
  //@Input() nomProjets : String = "";
  //@Input() description : String = "";
  //@Input() ressource : String = "";
  //@Input() project = {} as Project;

  projects  = [
    {
      nomProjet: 'WebSite-Coffe',
      description:
      'WebSite-Coffee est un site web moderne et accueillant dédié aux amateurs de café.',
      link: 'https://github.com/Idriss-Mikdame/Coffee-Website.git',
      resource: [ 'html', 'css', 'js'],

    },
]
  constructor() {
  }
}
