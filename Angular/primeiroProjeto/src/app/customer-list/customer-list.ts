import { Component } from '@angular/core';
import { Customer } from '../services/customer';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {

  constructor(private customerService: Customer) {

  }

  customers: any;

  ngOnInit() {

    this.customers = this.customerService.getCustomers();
  }
}
