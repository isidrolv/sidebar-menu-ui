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
import {MenuService} from "../../services/menu.service";

export interface MenuItem {
  id: number;
  name: string;
  icon: string;
  isRoot?: boolean | false;
  hasChildren?: boolean | false;
  nodeLevel: number;
  isExpanded?: boolean | false;
  isShowing?: boolean | true;
  route: string;
  parentId?: number | null;
  children?: MenuItem[] | null | undefined;
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
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    console.log('SidebarMenuComponent.ngOnInit');

    this.menuService.getSideBarItems().subscribe((data: MenuItem[]) => {
      this.menuItems = this.decorateTree(data).filter((item) => item.parentId === null); // take only root items
      console.log(["decorated items", this.menuItems]);
    });
  }

  private decorateTree(data: MenuItem[]): MenuItem[] {
    console.log(data);
    return data.map((item) => {
      const obj: MenuItem = item;
      obj.children = data.filter((child) => child.parentId === item.id);
      obj.hasChildren = obj.children != null && obj.children.length > 0;
      return obj
    });

  }

}
