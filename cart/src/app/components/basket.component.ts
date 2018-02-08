import { Component, OnInit, Input } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input()
  basket: string[] = [];

  constructor(private cartSvc: CartService) { }

  ngOnInit() { }

  removeFromCart(i: number) {
    console.log(">>> index to delete: ", i);
    this.cartSvc.removed.next(i);
  }

}
