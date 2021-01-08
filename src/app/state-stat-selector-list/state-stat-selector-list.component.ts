import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-stat-selector-list',
  templateUrl: './state-stat-selector-list.component.html',
  styleUrls: ['./state-stat-selector-list.component.css']
})
export class StateStatSelectorListComponent implements OnInit {

  stats: String[] = ["population", "birth rate"];

  constructor() { }

  ngOnInit(): void {
    console.log(this.stats);
  }

}
