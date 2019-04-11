import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GameOfLifeService {
  constructor(private httpClient: HttpClient) {
  }

  getWorldNames() {
    return this.httpClient.get('http://localhost:9000/game/worlds');
  }

  setWorld(worldName: string) {
    return this.httpClient.get(`http://localhost:9000/game/world/${worldName}`);
  }

  resetWorld(worldName: string) {
    return this.httpClient.get(`http://localhost:9000/game/reset/${worldName}`);
  }

  step() {
    return this.httpClient.get('http://localhost:9000/game/step');
  }

  getNumberOfSteps() {
    return this.httpClient.get('http://localhost:9000/game/stepsnumber');
  }
}
