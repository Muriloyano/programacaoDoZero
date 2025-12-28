import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho-a',
  imports: [CommonModule],
  templateUrl: './filho-a.html',
  styleUrl: './filho-a.css',
})
export class FilhoA {

  @Input() texto = ''; 

  @Output() textoPreenchido = new EventEmitter<string>();

  enviar(value: string) {

    this.textoPreenchido.emit(value);
  }
}
