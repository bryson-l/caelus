import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import data from '../../data/flights.js';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {

  ngOnInit() {
    console.log(this.flightData)
  }

  flightData: {} = data

}