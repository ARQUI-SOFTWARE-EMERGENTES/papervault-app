import { Component } from '@angular/core';
import { ResearchService } from '../../../services/research/research.service';
import { Research } from '../../models/research.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  isUploaded: boolean
  researchData: Research

  constructor(private researchService: ResearchService) {
    this.isUploaded = false
    this.researchData = {} as Research
  }

  uploadResearch(form: any) {
    if (form.valid) {
      this.researchService.create(this.researchData).subscribe((response: any) => {
        this.isUploaded = true
      });
    }
  }
}
