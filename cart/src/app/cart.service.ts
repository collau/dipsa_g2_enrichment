import {Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CartService {

  added = new EventEmitter<string>();
  removed = new EventEmitter<number>();

}
