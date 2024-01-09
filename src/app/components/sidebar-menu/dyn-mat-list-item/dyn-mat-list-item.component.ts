import {Component, Input} from '@angular/core';
import {MenuItem} from "../sidebar-menu.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dyn-mat-list-item',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './dyn-mat-list-item.component.html',
  styleUrl: './dyn-mat-list-item.component.css'
})
export class DynMatListItemComponent {

  @Input() menuItems: MenuItem[] | undefined;


  isSubMenu(menuItem: MenuItem): boolean | undefined {
    return menuItem.hasChildren && menuItem.children!=null && menuItem.children.length>0
  }

}
