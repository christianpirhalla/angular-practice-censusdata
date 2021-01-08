import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-stat-selector',
  templateUrl: './state-stat-selector.component.html',
  styleUrls: ['./state-stat-selector.component.css']
})
export class StateStatSelectorComponent implements OnInit {

  @Input() property: string;
  activated: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    console.log(this.property + 'toggled ' + this.activated);
  }

}
