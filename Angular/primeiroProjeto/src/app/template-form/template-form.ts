import { Component } from '@angular/core';
import { Customer } from '../Models/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  model = new Customer(null, '', '')

  generos = ['Masculino', 'Feminino'];

  submitted = false;

  onSubmit(){

    this.submitted = true;

    console.warn(this.model)
  }
}
