import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  private stars: boolean[];

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  @Input()
  private readOnly: boolean[];

  // 將父組件中的數據通過輸入屬性傳遞給子組件
  @Input()
  private rating: number;

  constructor() {
  }

  ngOnInit() {
  }

  clickStar(index: number) {
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
