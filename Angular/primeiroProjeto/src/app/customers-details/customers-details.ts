import { Component } from '@angular/core';
import { Customer } from '../services/customer';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers-details',
  imports: [RouterModule],
  templateUrl: './customers-details.html',
  styleUrl: './customers-details.css',
})
export class CustomersDetails {

  constructor(private route: ActivatedRoute, private customerService: Customer) {

  }
  customer: any;

  ngOnInit() {
    //pegar Id da url
    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {

      this.customer = this.customerService.getById(+id);
    }
  }
}
