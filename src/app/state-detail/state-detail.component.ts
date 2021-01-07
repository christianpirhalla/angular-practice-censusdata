import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StateService } from '../state.service';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.css']
})
export class StateDetailComponent implements OnInit {
  @Input() stateSelected: State;
  constructor() { }

  ngOnInit(): void {

  }

}
