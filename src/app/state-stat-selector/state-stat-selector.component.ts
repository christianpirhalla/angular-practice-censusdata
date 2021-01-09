import { Component, OnInit, Input } from '@angular/core';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-state-stat-selector',
  templateUrl: './state-stat-selector.component.html',
  styleUrls: ['./state-stat-selector.component.css']
})
export class StateStatSelectorComponent implements OnInit {

  @Input() property: string;
  activated: boolean;

  constructor(private statService: StatserviceService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    console.log(this.property + 'toggled ' + this.activated);
    //this.statService.togglePopulation();
  }

}
