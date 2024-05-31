import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  isUploaded: boolean

  constructor() {
    this.isUploaded = false
  }

  onUpload() {
    this.isUploaded = true
  }

}
