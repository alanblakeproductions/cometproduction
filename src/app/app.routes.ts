import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { CastComponent } from './cast/cast.component'
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cast', component: CastComponent },
];
