import {Component, Input, input, OnInit} from '@angular/core';
import {Project} from '../_modules/Project';

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
  @Input() project = {} as Project;


  constructor() {
  }
}
