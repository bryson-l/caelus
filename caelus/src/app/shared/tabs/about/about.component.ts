import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { ScheduleService } from '../../services/schedule.service';
import { PilotService } from '../../services/pilot.service';
import { Pilot } from '../../models/pilot';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(
    private scheduleService: ScheduleService,
    private pilotService: PilotService,
    private flightService: FlightService
  ){}

  loggedInUser: any;

  ngOnInit() {// this is so disgusting, i can see Anthony's disappointment
  // no longer works
    setTimeout(() => {
      this.pilotService.getLoggedInUser()
                       .subscribe(data => {
                          this.loggedInUser = data
                          this.scheduleService.getScheduleById(this.loggedInUser.schedule_id)
                                              .subscribe((data: any) => {
                                                let flightIds = data.flight_ids
                                                let flightArray = []
                                                flightIds.forEach(flightId => {
                                                  this.flightService.getFlightById(flightId)
                                                                    .subscribe(flightObj => {
                                                                      flightArray.push(flightObj)
                                                                    })
                                                })
                                                this.testDataCurrent = flightArray
                                                this.grid.instance.selectRowsByIndexes([0])
                                              })
                       })
    }, 20)
  }

  testDataCurrent: any[] = [
  ]

  testDataTrade: any[] = [
  ]

  currentSelected: any = {};
  tradeSelected: any = {};

  @ViewChild('grid', {static: false}) grid: DxDataGridComponent
  @ViewChild('grid2', {static: false}) grid2: DxDataGridComponent

  onRowSelect(e: any) {
    console.log(e)
  }

  setTradeData(e: any) {
    if (e.to !== 'Dallas/Fort Worth (DFW)') {
      this.testDataTrade = [
        {to: 'Dallas/Fort Worth (DFW)', from: 'Raleigh (RDU)', time: '9:30 am', id: 3}
      ]
    }
    else {
      this.testDataTrade = [
        {to: 'Atlanta (ATL)', from: 'Raleigh (RDU)', time: '9:30 am', id: 2}
      ]
    }
    
  }

  onCurrentSelect(e: any) {
    // e.key is the row's object
    this.currentSelected = e.key
    // now to get the valid trade data
    this.flightService.getValidTrades(this.currentSelected.flightId)
                      .subscribe(data => {
                        this.grid2.dataSource = data
                      })
  }

  onTradeSelect(e: any) {
    this.tradeSelected = e.key
  }

  onTradeClick() {
    if (this.currentSelected && this.tradeSelected) {
      // removes the selected items from their respective data grids
      let index = this.grid.instance.getRowIndexByKey(this.currentSelected.id)
      //this.grid.dataSource = this.grid.dataSource.filter(x => x !== this.currentSelected)
      //this.grid2.dataSource = this.grid2.dataSource.filter(x => x !== this.tradeSelected)
      // adds the selected items to the opposite grid
      //this.grid.dataSource.push(this.tradeSelected)
      //this.grid2.dataSource.push(this.currentSelected)
      // deselect all and set the selected variables to nothing
      this.grid.instance.clearSelection()
      this.grid2.instance.clearSelection()
      this.currentSelected = {}
      this.tradeSelected = {}
    }
  }

}
