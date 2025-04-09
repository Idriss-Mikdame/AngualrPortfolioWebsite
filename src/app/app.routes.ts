import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {path : "home" , component : HomeComponent},
  {path : "about", component : AboutComponent}
];
