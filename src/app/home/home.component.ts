 import { Component } from '@angular/core';
 import {RouterLink} from '@angular/router';
 import {NgOptimizedImage} from '@angular/common';
 import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private titleService:Title) {
  this.titleService.setTitle('Idriss mikdame-HOME')
}

}
