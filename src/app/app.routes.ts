import {Route} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

export const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  // { path: '**', component: PageNotFoundComponent }
];
