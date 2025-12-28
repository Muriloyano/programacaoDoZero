import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  
  constructor() { }

  private customers = [
    {id: 1, nome: 'Murilo'},
    {id: 2, nome: 'Lucas'},
    {id: 3, nome: 'Joao'},
  ];

  getCustomers() {
    return this.customers
  }

  getById(id: number) {
    
    let customer = this.customers.find((obj) => {
      return obj.id === id;
    });

    return customer;
  }
}
