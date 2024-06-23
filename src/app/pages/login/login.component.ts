import { Component } from '@angular/core';
import { Login } from '../../models/login.model';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
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
        this.authService.loginSuccess();
        this.router.navigate(['/search']);
      }
    },
    (error) => {
      this.invalidLogin = true;
    })
  }
}
