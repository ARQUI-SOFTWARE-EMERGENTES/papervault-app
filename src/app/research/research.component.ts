import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ResearchService } from '../services/research/research.service';
import { Research } from '../models/research.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent implements OnInit {
  research: Research;
  id: string | null;
  reference: boolean = false;
  cite: string = '';
  copyText: string = 'Copy'

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
      this.cite = `${response.authors}. (${response.publishedDate}). ${response.title}. ${response.journal}, ${response.volume}(${response.issue}), ${response.pages}. ${response.doi}`;
    });
  }

  goBack() {
    this.location.back();
  }

  generateReference() {
    this.reference = true;
  }

  closeReference() {
    this.reference = false;
    this.copyText = 'Copy';
  }

  copyReference() {
    navigator.clipboard.writeText(this.cite).then(() => {
      this.copyText = 'Copied';
    });
  }
}
