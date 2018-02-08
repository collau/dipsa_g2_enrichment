import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CuteImgComponent } from './components/cute-img.component';
import { BasketComponent } from './components/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    CuteImgComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
