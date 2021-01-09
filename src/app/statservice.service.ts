import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatserviceService {
population: boolean = false;
births: boolean = false;
deaths: boolean = false;
dom: boolean = false;
nim: boolean = false;

  constructor() { }

  getPopulation(): boolean {
    return this.population;
  }

  setStatToggles(val){
    this.population = val.population;
    this.births = val.births;
    this.deaths = val.deaths;
    this.dom = val.dom;
    this.nim = val.nim;
  }

  getStatToggles(){
    let val = {
      population : this.population,
      births : this.births,
      deaths : this.deaths,
      dom : this.dom,
      nim : this.nim
    }
    return val;
  }

}
