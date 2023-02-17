import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {
@Input() rating: number= 0
public nbrating: number= 0
@Output() newItemEvent = new EventEmitter<number>();
constructor() {}
ngOnChanges() {
  this.nbrating= this.rating * 20
}
sendRating(value: number) {
  this.newItemEvent.emit(value);
}
}
