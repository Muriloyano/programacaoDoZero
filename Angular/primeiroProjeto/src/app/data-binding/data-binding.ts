import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'meu primeiro data binding';

  isDisabled = true;

  arialLabel = 'Fechar';

  estilizarTitulo = true;

  nomeCliente = '';

  enableBnt() {
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstilo() {
    this.estilizarTitulo = !this.estilizarTitulo
  }
}