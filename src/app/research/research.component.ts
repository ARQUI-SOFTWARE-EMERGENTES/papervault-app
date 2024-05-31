import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
