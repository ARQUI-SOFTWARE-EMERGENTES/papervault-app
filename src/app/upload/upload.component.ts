import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Research } from '../models/research.model';
import { ResearchService } from '../services/research/research.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  isUploaded: boolean
  researchData: Research

  constructor(private researchService: ResearchService) {
    this.isUploaded = false
    this.researchData = {
      title: '',
      content: '',
      abstractText: '',
      reviewStatus: 'PENDING'
    } as Research
  }

  uploadResearch(form: any) {
    if (form.valid) {
      this.researchData.submissionDate = new Date(),
      this.researchData.lastModifiedDate = new Date(),
      this.researchService.create(this.researchData).subscribe((response: any) => {
        this.isUploaded = true
      });
    }
  }
}
