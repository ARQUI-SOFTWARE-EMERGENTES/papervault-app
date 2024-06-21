import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
  loggedIn: boolean;

  constructor(private router: Router) {
    this.loggedIn = localStorage.getItem('token') ? true : false
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.loggedIn = false
  }

}
