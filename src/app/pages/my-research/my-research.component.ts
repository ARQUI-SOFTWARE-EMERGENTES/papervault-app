import { Component } from '@angular/core';
import { ResearchService } from '../../../services/research/research.service';
import { Research } from '../../models/research.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-research',
  templateUrl: './my-research.component.html',
  styleUrls: ['./my-research.component.css']
})
export class MyResearchComponent {
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
