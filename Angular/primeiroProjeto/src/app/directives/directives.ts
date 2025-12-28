import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  classeBotaoVerde = 'botao verde';

  classeBotaoVermelho = 'botao vermelho';

  aplicarEstiloVerde = true;

  estiloParagrafo = {'font-size': '14px', 'font-style': 'italic'};

  name = "";

  camposVisiveis = true;

  clientes = [
    {nome: 'Murilo'},
    {nome: 'Lucas'},
    {nome: 'Joao'},
  ];

  aplicarEstilos() {
    this.aplicarEstiloVerde = !this.aplicarEstiloVerde;
  }

  alterarParaMaiusculo($event: any) {
    this.name = $event.toUpperCase()
  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis
  }
}
