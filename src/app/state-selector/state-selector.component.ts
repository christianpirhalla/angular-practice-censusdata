import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-state-selector',
  templateUrl: './state-selector.component.html',
  styleUrls: ['./state-selector.component.css']
})
export class StateSelectorComponent implements OnInit {
  states: State[] = [];
  selected : State;
  constructor(private stateService: StateService) { }

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
          fips:parseInt(stateElement[3], 10),
          pop:parseInt(stateElement[1], 10)
      };
      this.states.push(newstate);
    })
  });
}

}
