import { Component } from '@angular/core';
import { MenuService } from '../services/menu';
import { Menu } from '../models/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {

  constructor(private menuService: MenuService) { }

  menuStatus  = 'closed';

  menuItens?: Array<Menu>; 

  ngOnInit() {
    const menu = this.menuService.getItem();

    this.menuItens = menu;
  }

  menuClick() {
    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');

    
  }
}
