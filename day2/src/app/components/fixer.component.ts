import {
  Component, OnInit, OnDestroy, Input
} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import {FixerService} from '../fixer.service';

@Component({
  selector: 'app-fixer',
  templateUrl: './fixer.component.html',
  styleUrls: ['./fixer.component.css']
})
export class FixerComponent implements OnInit, OnDestroy {

  @Input()
  baseRate = 'SGD';

  rates = {};
  currencies = [];

  private sub: Subscription;

  constructor(private http: HttpClient, private fixerSvc: FixerService) { }

  ngOnInit() {
    this.sub = this.fixerSvc.baseRateEvent.subscribe(
      (data) => {
        console.log('>>> fixer service event: ', data);
        this.fixerSvc.getExchangeRate(data)
          .then((rates) => {
            this.rates = rates;
          });
      },
      (error) => {
        console.log('>>> fixer service error: ', error);
      }
    );

    this.fixerSvc.getExchangeRate(this.baseRate)  //this returns a promise
      .then(rates => {
        console.log('>>> rates: ', rates);
        this.rates = rates;
        this.currencies = Object.keys(this.rates);
      }).catch(error => {
          console.log('>> error: ', error);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
