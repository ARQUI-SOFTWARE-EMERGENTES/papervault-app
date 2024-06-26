import { Component } from '@angular/core';
import { Research } from '../../models/research.model';
import { ResearchService } from '../../../services/research/research.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  edit: boolean = false;
  profileData: Profile
  pendingResearchs: Research[]

  constructor(private profileService: ProfileService, private researchService: ResearchService, private router: Router){
    this.profileData = {} as Profile
    this.pendingResearchs = []
  }

  toggleEdit() {
    this.edit = !this.edit; 
  }

  ngOnInit(): void {
    this.researchService.getRevision().subscribe((response: any) => {
      this.pendingResearchs = response
    }),
    this.profileService.getProfile().subscribe((response: any) => {
      this.profileData = response
    })
  }

  onSubmit() {
    this.profileService.update(this.profileData.id, this.profileData).subscribe((response: any) => {
      this.profileData = response
      this.edit = false
    });
  }

  approveResearch(id: string) {
    console.log(id)
    this.researchService.approve(id).subscribe((response: any) => {
      console.log(response)
      this.pendingResearchs = this.pendingResearchs.filter((research) => research.id !== id)
    })
  }

  rejectResearch(id: string) {
    this.researchService.reject(id).subscribe((response: any) => {
      this.pendingResearchs = this.pendingResearchs.filter((research) => research.id !== id)
    })
  }

  viewResearch(id: string) {
    this.router.navigate(['/research', id]);
  }
}
