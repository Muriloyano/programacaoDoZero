import { Component } from '@angular/core';
import { FilhoA } from "../filho-a/filho-a";
import { FilhoB } from "../filho-b/filho-b";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  imports: [FilhoA, FilhoB, RouterModule, CommonModule],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css',
})
export class HelloWorld {

  textoVaiProFilho: string = '';

  textoDoFilho: string = '';
}
