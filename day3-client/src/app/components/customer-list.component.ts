import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: any[] = [];

  constructor(private customerSvc: CustomerService) { }

  ngOnInit() {
    this.customerSvc.getAllCustomers()
      .then(result => {
        this.customers = result;
        console.log(">>> result = ", result);
      })
      .catch(error => {
        console.log(">>> error = ", error);
      })
  }

}
