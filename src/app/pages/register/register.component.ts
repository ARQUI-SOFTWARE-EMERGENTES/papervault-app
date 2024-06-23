import { Component } from '@angular/core';
import { Register } from '../../models/register.model';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: Register
  passwordMatch: boolean

  constructor(private authService: AuthService, private router: Router) {
    this.registerData = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      lastname: ''
    } as Register;
    this.passwordMatch = true;
  }

  register(form: any) {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.passwordMatch = false;
      form.valid = false;
    }
    if (!form.valid) return
    
    this.authService.register(this.registerData).subscribe((response: any) => {
      this.router.navigate(['/login']);
    })
  }
}
