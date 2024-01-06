import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {Router} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  form: any;

  constructor(private router: Router) {
    const about: string = "This is a demo window created to " +
      "do a POC for the sidebar menu and topbar menu in angular" +
      " with material.";
    this.form = new FormGroup({
      about: new FormControl(about, Validators.required)
    });
  }

  onSubmit(): void {
    this.router.navigate(['/home']);
  }
}
