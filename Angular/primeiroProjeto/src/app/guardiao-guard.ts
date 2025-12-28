import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router'; 
import { Auth } from './services/auth';

export const guardiaoGuard: CanActivateFn = (route, state) => {

  let podeAcessar = inject(Auth).podeAcessar();

  if (!podeAcessar) {
    const router = inject(Router); 
    router.navigate(['hello-world']);

    return false;
  }
  
  return true;
};