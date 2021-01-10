import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';
import { of } from 'rxjs';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.css']
})
export class StateSelectorComponent implements OnInit {
  states: State[] = [];
  stateSelected : State;
  population: boolean; //default
  births: boolean; 
  deaths: boolean;
  dom: boolean;
  nim: boolean;

  constructor(private stateService: StateService, private statService: StatserviceService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates(): void{
    console.log("starting");
    var source = this.stateService.getStates();
    source.subscribe(statestr => {
      statestr.forEach( stateElement => {
        console.log(stateElement);
        let newstate: State = {
          name:stateElement[0],
          fips:parseInt(stateElement[7], 10),
          pop:parseInt(stateElement[1], 10),
          births:parseInt(stateElement[2], 10),
          deaths:parseInt(stateElement[3], 10),
          dom:parseInt(stateElement[4], 10),
          nim:parseInt(stateElement[5], 10)
      };
      this.states.push(newstate);
    })
  });
}

  onStateSelected(id: number): void {
    this.updateSelected(id);
  }

  getValues(val){
    this.statService.setStatToggles(val);
    this.onStatChange();
  }

  onStatChange(): void {
    console.log("called");
    let val = this.statService.getStatToggles();
    this.population = val.population;
    this.births = val.births;
    this.deaths = val.deaths;
    this.dom = val.dom;
    this.nim = val.nim;
  }

  updateSelected(id: number): void{
    let s:State;
    for (s of this.states){
      if (s.fips == id) {
        this.stateSelected = s;
        return;
      }
    }
  }

}
