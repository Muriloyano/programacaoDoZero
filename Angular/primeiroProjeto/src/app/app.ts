import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor(private authSevice: Auth) {

  }

  podeAcessar: boolean = false;

  ngOnInit() {

    this.podeAcessar = this.authSevice.podeAcessar();
  }

  alterarAcesso(e: any) {
    
    this.authSevice.update(e.target.checked);
  }
}
