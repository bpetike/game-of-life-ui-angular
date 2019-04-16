import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

import {Location} from './app-location.model';

@Component({
  selector: 'app-world',
  templateUrl: 'app-world.component.html'
})
export class WorldComponent implements OnInit, OnChanges {

  @Input() currentWorld: Location[];
  @Input() stepsTaken: number;

  @Output() update = new EventEmitter<boolean>();

  locations: Location[];
  isWorldLoaded = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentWorld'] !== undefined) {
      this.locations = changes['currentWorld'].currentValue;
    }
    this.displayCells();
    this.isWorldLoaded = this.stepsTaken >= 0;
  }

  takeStep() {
    this.update.emit(true);
  }

  displayCells() {
    const xCoords = this.locations.map((loc) => loc.x);
    console.log(xCoords);
  }
}
