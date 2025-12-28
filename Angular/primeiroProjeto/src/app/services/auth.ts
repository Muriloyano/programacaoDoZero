import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  constructor() { }

  update(acesso: boolean) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('podeAcessar', acesso.toString());
    }
  }

  podeAcessar(): boolean {
    if (typeof window !== 'undefined') {
      const podeAcessarString = sessionStorage.getItem('podeAcessar');

      if (!podeAcessarString) {
        return false;
      }

      return JSON.parse(podeAcessarString);
    }
    return false;
  }
}