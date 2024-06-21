import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResearchService } from '../services/research/research.service';
import { Research } from '../models/research.model';

@Component({
  selector: 'app-my-research',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-research.component.html',
  styleUrl: './my-research.component.css'
})
export class MyResearchComponent implements OnInit {
  approvedResearchs: Research[] = [];
  pendingResearchs: Research[] = [];
  rejectedResearchs: Research[] = [];
  
  constructor(private researchService: ResearchService) {}

  ngOnInit() {
    this.researchService.getApproved().subscribe((response: any) => {
      this.approvedResearchs = response;
    });

    this.researchService.getPending().subscribe((response: any) => {
      this.pendingResearchs = response;
    });

    this.researchService.getRejected().subscribe((response: any) => {
      this.rejectedResearchs = response;
    });
  }

}
