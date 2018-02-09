import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customer: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private customerSvc: CustomerService) { }

  ngOnInit() {
    console.log("customer id = ", this.activatedRoute.snapshot.params.custId);
    this.customerSvc.getDetail(this.activatedRoute.snapshot.params.custId)
      .then(result => {
        this.customer = result;
        console.log(">>> result: ", result);
      })
      .catch(error => {
        console.error(">>> error: ", error);
      });
  }

  goBack() {
    this.router.navigate(['/'])
  }

}
