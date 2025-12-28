import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  date: Date = new Date();

  nameText: string = '';

  value: number = 45.50;

  pi: number = 3.1415;

  changeName(name: string) {
    this.nameText = name;
  }
}
