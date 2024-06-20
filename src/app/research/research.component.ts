import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ResearchService } from '../services/research/research.service';
import { Research } from '../models/research.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
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
