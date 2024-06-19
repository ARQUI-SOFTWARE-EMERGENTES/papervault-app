import { Component } from '@angular/core';
import { Login} from '../models/login.model';
import { AuthService } from '../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: Login;
  invalidLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.invalidLogin = false;
    this.loginData = {
      email: '',
      password: ''
    } as Login;
  }

  login(form: any) {
    if (!form.valid) return

    this.authService.login(this.loginData).subscribe((response: any) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/search']);
      }
    },
    (error) => {
      this.invalidLogin = true;
    })
  }
}
