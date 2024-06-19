import { Component } from '@angular/core';
import { Register } from '../models/register.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
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
