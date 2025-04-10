import { Component } from '@angular/core';
import {ProjectCardsComponent} from "../project-cards/project-cards.component";
import {Title} from '@angular/platform-browser';
import {Projects} from '@angular/cli/lib/config/workspace-schema';
import {Project} from '../_modules/Project';

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
project: Project = {
    name : 'Coffe',
    description : 'idriss mikdame',
     ressource : 'https://www.youtube.com/',
}

constructor(private titleProject : Title) {
   this.titleProject.setTitle('idriss - Project')
}
}
