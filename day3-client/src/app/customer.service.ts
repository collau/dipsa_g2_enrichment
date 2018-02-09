import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Promise<any> {
    return (this.http.get('/day3_server/customer')
      .take(1)
      .toPromise());
  }

  getDetail(cid: number): Promise<any> {
    return (this.http.get(`/day3_server/details/${cid}`)
      .take(1)
      .toPromise());
  }
}
