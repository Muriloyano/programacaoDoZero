import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private profileService: ProfileService) { }

  profile?: Profile;

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
