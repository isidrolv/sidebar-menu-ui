import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {DynMatListItemComponent} from "./dyn-mat-list-item/dyn-mat-list-item.component";

export interface MenuItem {
  id: number;
  name: string;
  icon: string;
  isRoot?: boolean | false;
  hasChildren?: boolean | false;
  isExpanded?: boolean | false;
  isShowing?: boolean | true;
  route: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    NgForOf,
    RouterOutlet,
    RouterLink,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule,
    ToolBarComponent,
    NgIf,
    DynMatListItemComponent
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  fillerNav: string[] = ['Home', 'About', 'Contact'];
  menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems.push({
      id: 1, name: 'Home', icon: 'home', isRoot: true, hasChildren: false, route: '/home', children: []
    });
    this.menuItems.push({
      id: 2, name: 'About', icon: 'info', isRoot: true, hasChildren: false, route: '/about'
    });
    this.menuItems.push({
      id: 3, name: 'Dashboard', icon: 'contact_mail', isRoot: true, route: '/dashboard'
    });
    this.menuItems.push({
      id: 4, name: 'Lazy', icon: 'contact_mail', isRoot: false, hasChildren: true, route: '/lazy', children: [
        {id: 41, name: 'Lazy Home', icon: 'home', isRoot: false, hasChildren: false, route: '/home'},
        {id: 42, name: 'Lazy About', icon: 'info', isRoot: false, hasChildren: false, route: '/about'}
      ]
    });
    this.menuItems.push({
      id: 5, name: 'Contact', icon: 'contact_mail', isRoot: true, route: '/contact'
    });
    

  }
}
