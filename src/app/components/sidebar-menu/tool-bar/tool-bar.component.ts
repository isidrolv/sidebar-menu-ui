import {Component, Input} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";

@Component({
    selector: 'app-tool-bar',
    standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    RouterLink,
    MatDividerModule
  ],
    templateUrl: './tool-bar.component.html',
    styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

    @Input() sidenav: any = null;

    constructor() {
    }

}
