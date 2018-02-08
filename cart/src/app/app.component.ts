import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contents: string[] = [];

  private addSub: Subscription;
  private removeSub: Subscription;

  constructor(private cartSvc: CartService) {}

  ngOnInit() {
    this.addSub = this.cartSvc.added.subscribe(
      (data) => {
        this.contents.unshift(data);
        console.log(">>> contents: ", this.contents);
      }
    )

    this.removeSub = this.cartSvc.removed.subscribe(
      (i) => {
        this.contents.splice(i, 1);
      }
    )

  }
}
