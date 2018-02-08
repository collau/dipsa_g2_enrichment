import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  readonly inventories = ['apple', 'orange', 'pear', 'grapes'];

  @ViewChild('invForm') invForm: NgForm;

  constructor(private cartSvc: CartService) { }

  ngOnInit() { }

  addToCart() {
    console.log(">> item = ", this.invForm.value.fruit);
    this.cartSvc.added.next(this.invForm.value.fruit);
    this.invForm.reset();
  }

}
