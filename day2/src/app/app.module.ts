import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FixerComponent } from './components/fixer.component';
import { BaseRateComponent } from './components/base-rate.component';
import { FixerService } from './fixer.service';


@NgModule({
  declarations: [
    AppComponent,
    FixerComponent,
    BaseRateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ FixerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
