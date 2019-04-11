import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {GameOfLifeService} from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: GameOfLifeService, private formBuilder: FormBuilder) {}

  title = 'Game of Life';
  worldForm: FormGroup;
  selectedWorld: string;
  worldNames: string[];
  data: Object[];
  numberOfSteps: number;

  ngOnInit() {
    this.data = [];
    this.service.getWorldNames().subscribe((value: Object) => this.worldNames = value['worldNames']);
    this.worldForm = this.formBuilder.group({
      worldControl: ['']
    });
  }

  setWorld(worldName: string) {
    if (worldName.length > 0) {
      this.selectedWorld = worldName;
      this.service.setWorld(worldName).subscribe((data: Object[]) => data.forEach(value => this.data.push(value)));
      console.log(this.data);
      this.service.getNumberOfSteps().subscribe((data: Object) => this.numberOfSteps = data['steps']);
    }
  }

  resetWorld() {
    this.data = [];
    this.service.resetWorld(this.selectedWorld).subscribe((data: Object[]) => data.forEach(value => this.data.push(value)));
    this.service.getNumberOfSteps().subscribe((data: Object) => this.numberOfSteps = data['steps']);
  }

  onStep() {
    this.data = [];
    this.service.step().subscribe((data: Object[]) => data.forEach(value => this.data.push(value)));
    this.service.getNumberOfSteps().subscribe((data: Object) => this.numberOfSteps = data['steps']);
    console.log(this.data);
  }
}
