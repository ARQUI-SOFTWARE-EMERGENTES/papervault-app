import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
