import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  
  constructor() { };

  getProfile(): Profile {

    var profile: Profile = {
      email: 'muril0yano150107@gmail.com',
      name: 'Murilo Yano',
      whatsAppUrl: 'https://wa.link/92fzw5',
      linkedIn: 'www.linkedin.com/in/murilo-yano-119088360',
    }

    return profile;
  }
}
