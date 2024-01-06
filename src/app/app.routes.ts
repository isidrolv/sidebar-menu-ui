import {Route} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";

export const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // { path: 'contact', component: ContactComponent },
  // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  // { path: '**', component: PageNotFoundComponent }
];
