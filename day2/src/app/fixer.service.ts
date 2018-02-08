import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class FixerService {

  baseRateEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getExchangeRate(br: string): Promise<any> {
    let qs = new HttpParams()
      .set('base', br);

    //Returns an observable
    return (
      this.http.get('https://api.fixer.io/latest', {params: qs})
          .take(1) //from observable take 1 from the stream
          .toPromise()
        .then((result) => {
          return (result.rates);
        })
    ); //convert the event to a promise
  }
}
