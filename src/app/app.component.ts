import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SidebarMenuComponent} from "./components/sidebar-menu/sidebar-menu.component";
import {MenuService} from "./services/menu.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// global variables
export const uri = '/api/v1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarMenuComponent,
    HttpClientModule],
  providers: [MenuService, HttpClient],
  template: '<app-sidebar-menu></app-sidebar-menu>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sidebar-menu-ui';
}
