import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Research } from '../../models/research.model';
import { ResearchService } from '../../../services/research/research.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
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
