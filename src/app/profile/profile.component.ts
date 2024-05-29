import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ProfileService } from './service/profile.service';
import { Profile } from './interface/profile';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  edit: boolean = false;
  profile_id: any;
  profileData: Profile

  @ViewChild('profileForm', {static: false})
  profileForm!: NgForm;

  constructor(private profileService: ProfileService, private route: ActivatedRoute){
    this.profileData = {} as Profile
    this.profile_id = this.route.snapshot.paramMap.get('id');
  }

  toggleEdit() {
    this.edit = !this.edit; 
    console.log(this.profileData)
  }

  ngOnInit(): void {
    this.profileService.getById(this.profile_id).subscribe((response: any) => {
      this.profileData = response
      console.log(this.profileData)
    })
  }

  onSubmit() {
    this.profileService.update(this.profileData.id, this.profileData).subscribe((response: any) => {
      this.profileData = response
      this.edit = false
      console.log(this.profileData)
    });
  }
}
