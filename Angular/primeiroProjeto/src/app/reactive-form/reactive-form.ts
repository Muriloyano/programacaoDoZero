import { Component, inject } from '@angular/core'; 
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  private formBuilder = inject(FormBuilder);

  // profileForm = new FormGroup({

    // name: new FormControl(''),
    // cpf: new FormControl(''),
    // address: new FormGroup({
      // street: new FormControl(''),
      // city: new FormControl(''),
      // state: new FormControl(''),
      // zip: new FormControl(''),
    // })
  // });

  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    nicknames: this.formBuilder.array([this.formBuilder.control('')])
  });

  get apelidos() {
    return this.profileForm.get('nicknames') as FormArray
  }

  preencherForm() {
    this.profileForm.patchValue({
      name: 'Murilo',
      cpf: '10198511981',
      address: {
        street: 'Rua Neo Alves Martins',
        city: 'Maringa',
        state: 'Parana',
        zip: '87050110',
      }
    });
  }

  submitForm() {
    console.warn(this.profileForm.value);
  }

  adicionarApelido() {
    this.apelidos.push(this.formBuilder.control(''));
  }
}