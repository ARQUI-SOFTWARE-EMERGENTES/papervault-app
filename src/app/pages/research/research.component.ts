import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Research } from 'src/app/models/research.model';
import { ResearchService } from 'src/services/research/research.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  research: Research;
  id: string | null;

  constructor(private location: Location, private researchService: ResearchService, private route: ActivatedRoute, private router: Router) {
    this.research = {} as Research;
    this.id = this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit() {
    if (!this.id) {
      this.router.navigate(['/search']);
    }

    this.researchService.getById(this.id).subscribe((response: any) => {
      this.research = response;
    });
  }

  goBack() {
    this.location.back();
  }
}
