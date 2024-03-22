import { Component } from '@angular/core';
import { Interfaces } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {
  cars!: Interfaces[];
  Audi: Interfaces[] = [];
  logo!: string;

  constructor() {
    this.getCars();
  }

  async getCars() {
    let response = await fetch('../assets/db.json');
    let data = await response.json();    
    this.cars = data;

    if(data) {
      this.getMarchio();
    }
  }

  getMarchio() {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].brand === "Audi") {
        this.Audi.push(this.cars[i]);
      }
    }
    this.selectRandomCars();
  }

  selectRandomCars(): void {
    if (this.Audi.length >= 2) {
      const index1 = Math.floor(Math.random() * this.Audi.length);
      let index2 = Math.floor(Math.random() * this.Audi.length);
      while (index2 === index1) {
        index2 = Math.floor(Math.random() * this.Audi.length);
      }
      this.Audi = [
        this.Audi[index1],
        this.Audi[index2],
      ];
    }
  }
}

