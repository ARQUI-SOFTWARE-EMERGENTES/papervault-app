import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {

    this.authService.authStatus$.subscribe(status => {
      this.loggedIn = localStorage.getItem('token') ? true : false;
    });
    
  }

  signOut() {
    localStorage.removeItem('token');
    this.authService.logout();
    this.router.navigate(['/login']);
    this.loggedIn = false
  }

}
