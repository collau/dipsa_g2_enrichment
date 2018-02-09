import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer-list.component';
import {CustomerService} from "./customer.service";
import { DetailsComponent } from './components/details.component';

const ROUTES: Routes = [
  { path: "", component: CustomerListComponent },
  { path: "customers", component: CustomerListComponent },
  { path: "details/:custId", component: DetailsComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
