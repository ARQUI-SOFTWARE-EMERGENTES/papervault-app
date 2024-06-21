import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearchService } from '../services/research/research.service';
import { Research } from '../models/research.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  query: string;
  isQuery: boolean;
  researchs: Array<Research>;

  constructor(private route: ActivatedRoute, private router: Router, private researchService: ResearchService) {
    this.query = '';
    this.isQuery = false;
    this.researchs = [];
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      this.isQuery = this.query.length > 0;

      if (this.query.length > 0) {
        this.researchService.getAll(this.query).subscribe((response: any) => {
          this.researchs = response;
        });
      }
    });
  }

  search() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.query },
      queryParamsHandling: 'merge'
    });
  }

  viewResearch(id: string) {
    this.router.navigate(['/research', id]);
  }

}
