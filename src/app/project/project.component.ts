import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Projects} from '@angular/cli/lib/config/workspace-schema';
import {Project} from '../_modules/Project';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [

    NgForOf
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects  = [
    {
      img:'./asset/coffee.jpeg',
      nomProjet: 'WebSite-Coffe',
      description:
        'WebSite-Coffee est un site web moderne et accueillant dédié aux amateurs de café.',
      link: 'https://github.com/Idriss-Mikdame/Coffee-Website.git',
      tag: [ 'HTML-JS-CSS'],

    },
    {
      img:'./asset/construction.jpeg',
      nomProjet: 'ConstructionXpert',
      description:
        '​ConstructionXpert is a web-based application designed to assist construction teams in efficiently managing their projects. .',
      link: 'https://github.com/Idriss-Mikdame/ConstructionXpert.git',
      tag: [ 'JAVA/JEE-JS-HTML-CSS'],

    },
    {
      img:'./asset/sport.jpeg',
      nomProjet: 'SportFlow',
      description:
        '"SportFlow" refers to several distinct platforms and initiatives within the sports sector. .',
      link: 'https://github.com/Idriss-Mikdame/SportFlow.git',
      tag: [ 'JAVA/JEE-Html-CSS'],

    },
    {
      img:'./asset/school.jpeg',
      nomProjet: 'EduManager ',
      description:
        'EduManager is a term associated with various educational management systems and tools designed to streamline administrative and academic processes. ',
      link: 'https://github.com/Idriss-Mikdame/EduManager.git',
      tag: [ 'Html-CSS-JSP-JAVA/JEE'],

    },

    {
      img:'./asset/films.jpg',
      nomProjet: 'GetionFilms',
      description:
        'Un gestionnaire de films est un logiciel ou une application conçue pour aider les cinéphiles à organiser.',
      link: 'https://github.com/Idriss-Mikdame/gestionnaire-de-films-preferes.git',
      tag: [ 'HTML-CSS-JS'],

    },
    {
      img:'./asset/utilisateur.jpeg',
      nomProjet: 'GetionUtilisateur ',
      description:
        'Le module GestionUtilisateur permet de gérer l’ensemble des fonctionnalités liées aux utilisateurs de l\'application..',
      link: 'https://github.com/Idriss-Mikdame/-Application-de-Gestion-des-Comptes-Utilisateurs-JAVA.git',
      tag: [ 'HTML-CSS-JAVA'],

    },

  ]

constructor(private titleProject : Title) {
   this.titleProject.setTitle('idriss - Project')
}
}
