import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory.component';
import { BasketComponent } from './components/basket.component';
import {CartService} from "./cart.service";


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
