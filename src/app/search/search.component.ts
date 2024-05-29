import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.query = '';
    this.isQuery = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      this.isQuery = this.query.length > 0;
    });
  }

  search() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.query },
      queryParamsHandling: 'merge'
    });
  }

}
