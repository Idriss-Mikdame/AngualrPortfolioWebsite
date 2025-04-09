import { Component } from '@angular/core';
import {ProjectCardsComponent} from "../project-cards/project-cards.component";

@Component({
  selector: 'app-project',
  standalone: true,
    imports: [
        ProjectCardsComponent
    ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
