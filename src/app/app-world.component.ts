import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: 'app-world.component.html'
})
export class WorldComponent implements OnInit, OnChanges {

  @Input() currentWorld: Object[];
  @Input() stepsTaken: number;

  @Output() update = new EventEmitter<boolean>();

  isWorldLoaded = false;

  constructor() {
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isWorldLoaded = this.stepsTaken >= 0;
  }

  takeStep() {
    this.update.emit(true);
  }
}
