import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  states: State[]

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates(): void {

  }
}
