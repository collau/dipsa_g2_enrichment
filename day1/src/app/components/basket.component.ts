import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input()
  contents: Item[] = [];

  constructor() { }

  ngOnInit() {
  }

}
