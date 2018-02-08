import {
  Component, OnInit,
  Input, //values that are coming in
  Output, EventEmitter //firing events from the component
} from '@angular/core';

@Component({
  selector: 'app-cute-img',
  templateUrl: './cute-img.component.html',
  styleUrls: ['./cute-img.component.css']
})
export class CuteImgComponent implements OnInit {

  readonly DEFAULT_IMAGE = '/assets/dog.jpg';

  @Input() image: string = this.DEFAULT_IMAGE;
  @Input() imageTitle: string = "Cute Dogs";

  @Output() imageClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log("image = ", this.image);
  }

  whenImageClicked(): void {
    console.log("clicked: ", this.image);

    if (this.DEFAULT_IMAGE == this.image)
      return;

    this.imageClicked.next(this.image);
  }

}
