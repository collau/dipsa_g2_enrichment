import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Item } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('itemForm') itemForm: NgForm;

  private count = 0;
  images = [];
  title = 'My numbers';
  number = `/assets/numbers/number${this.count}.jpg`;
  basket: Item[] = [];

  constructor() {
    for (let i = 0; i < 31; i++)
      this.images.push(`/assets/numbers/number${i}.jpg`);
    console.log("images = ", this.images);
  }

  processItem(): void {
    console.log("submit button pressed: " + new Date());
    console.log("\tvalues = ", this.itemForm.value);
    console.log("\titem = ", this.itemForm.value.item);
    console.log("\tquantity = ", this.itemForm.value.quantity);

    this.basket.push({
      name: this.itemForm.value.name,
      quantity: this.itemForm.value.quantity,
    });

    console.log(">>> basket = ", this.basket);

    this.itemForm.reset();
  }

  changeImage(currImage): void {
    console.log("[AppComponent] the old image: ", currImage);
    this.number = `/assets/numbers/number${++this.count}.jpg`;
  }
}
