import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StateService } from '../state.service';

@Component({
  selector: 'app-state-detail',
  template: `<h2>{{ state.name }} </h2>
  <div><span>Population: {{ state.pop }}</span></div>`,
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {
  @Input() state: State;
  constructor() { }

  ngOnInit(): void {

  }

}
