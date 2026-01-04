import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(private profileService: ProfileService) { }

  profile?: Profile;

  date: Date = new Date();

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
