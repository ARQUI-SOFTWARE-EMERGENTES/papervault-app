import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchService } from '../services/research/research.service';
import { Research } from '../models/research.model';
import { Router, RouterModule } from '@angular/router';

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
  
  constructor(private researchService: ResearchService, private router: Router) {}

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

  viewResearch(id: string) {
    this.router.navigate(['/research', id]);
  }

}
