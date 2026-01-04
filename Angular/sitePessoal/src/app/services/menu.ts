import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  
  constructor() { }

  getItem(): Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: 'Inicio',
        url: '#banner',
      },
      {
        name: 'Sobre mim',
        url: '#about',
      },
      {
        name: 'Habilidades',
        url: '#skills',
      },
      {
        name: 'Projetos',
        url: '#projetos',
      },
      {
        name: 'Contato',
        url: '#contact',
      },
    ];

    return menu
  }
}
