import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

import {Location} from './app-location.model';

@Component({
  selector: 'app-world',
  styleUrls: ['app-world.component.css'],
  templateUrl: 'app-world.component.html'
})
export class WorldComponent implements OnInit, OnChanges {

  @Input() currentWorld: Location[];
  @Input() stepsTaken: number;

  @Output() update = new EventEmitter<boolean>();

  private ROWS_MAX = 100;
  private COLS_MAX = 100;
  locations: Location[];
  grid: number[][];
  isWorldLoaded = false;

  constructor() {}

  ngOnInit() {
    this.grid = [];
    this.initGrid();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentWorld'] !== undefined) {
      this.locations = changes['currentWorld'].currentValue;
    }
    for (const location of this.locations) {
      const rowNumber = location.x + this.ROWS_MAX / 2;
      const colNumber = location.y + this.COLS_MAX / 2;
      if (this.checkRow(rowNumber) && this.checkCol(colNumber)) {
        this.grid[rowNumber][colNumber] = 1;
      }
    }
    this.isWorldLoaded = this.stepsTaken >= 0;
  }

  takeStep() {
    this.update.emit(true);
  }

  private initGrid() {
    for (let i = 0; i < this.ROWS_MAX; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.COLS_MAX; j++) {
        this.grid[i][j] = 0;
      }
    }
  }

  private checkRow(rowNumber: number) {
    return 0 <= rowNumber && rowNumber <= this.ROWS_MAX;
  }

  private checkCol(colNumber: number) {
    return 0 <= colNumber && colNumber <= this.COLS_MAX;
  }
}
