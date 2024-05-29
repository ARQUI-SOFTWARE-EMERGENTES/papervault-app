import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  constructor(private router: Router) {}

  onUpload() {
    // lógica de carga aquí
    this.router.navigate(['/upload-succesfully']);
  }

}
