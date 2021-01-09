import { Component, OnInit } from '@angular/core';
import { StatserviceService } from '../statservice.service';

@Component({
  selector: 'app-state-stat-selector-list',
  templateUrl: './state-stat-selector-list.component.html',
  styleUrls: ['./state-stat-selector-list.component.css']
})
export class StateStatSelectorListComponent implements OnInit {

  constructor(private statService: StatserviceService) { }

  ngOnInit(): void {
    
  }

  getValues(val){
    this.statService.setStatToggles(val);
    }

}
