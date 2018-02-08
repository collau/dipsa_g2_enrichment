import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FixerService} from '../fixer.service';

@Component({
  selector: 'app-base-rate',
  templateUrl: './base-rate.component.html',
  styleUrls: ['./base-rate.component.css']
})
export class BaseRateComponent implements OnInit {

  @ViewChild('baseRateForm')
  baseRateForm: NgForm;

  constructor(private fixerSvc: FixerService) { }

  ngOnInit() { }

  getExchangeRates() {
    console.log('>> base rate: ', this.baseRateForm.value.baseRate);
    this.fixerSvc.baseRateEvent.next(this.baseRateForm.value.baseRate);
  }

}
