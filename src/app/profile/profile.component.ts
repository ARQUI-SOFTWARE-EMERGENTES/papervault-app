import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  edit: boolean = false; // Variable to control the visibility

  toggleEdit() {
    this.edit = !this.edit; // Function to toggle the value of edit
  }


}
