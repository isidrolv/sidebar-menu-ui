import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: any;
  isSubmitted: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['isidro', Validators.required],
      email: ['isidrolv@gmail.com', Validators.required],
      password: ['S3cret21.', Validators.required]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.router.navigate(['/dashboard'])
        .then(() => console.log('Navigated to Dashboard'));
    }
  }

  get f() { return this.loginForm.controls; }
}
