import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import data from '../../data/flights.js';
import { FlightService } from '../../services/flight.service.js';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  providers: [ FlightService ]
})
export class ScheduleComponent implements OnInit {

  constructor(
    private flightService: FlightService
  ) {}

  flightData: {} = data

  ngOnInit() {
    this.flightService.getAllFlights()
                      .subscribe(data => {
                        this.flightData = data
                      })
  }

  

}