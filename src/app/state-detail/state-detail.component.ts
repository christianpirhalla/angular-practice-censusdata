import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StateService } from '../state.service';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {
  @Input() stateSelected: State;

  @Input() population: boolean = true; 
  @Input() births: boolean;
  @Input() deaths: boolean;
  @Input() dom: boolean;
  @Input() nim: boolean;

  constructor(private statService: StatserviceService) { }

  ngOnInit(): void {
    this.getStatToggles();
    console.log(this.population);
  }

  getStatToggles(){
    let val = this.statService.getStatToggles();
    this.population = val.population;
    this.births = val.births;
    this.deaths = val.deaths;
    this.dom = val.dom;
    this.nim = val.nim;
  }

}
