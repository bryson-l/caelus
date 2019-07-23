import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      this.grid.instance.selectRowsByIndexes(0)
    }, 20)
  }

  testDataCurrent: any[] = [
    {to: 'Raleigh (RDU)', from: 'Raleigh (RDU)', time: '8:00 am', id: 1},
    {to: 'Atlanta (ATL)', from: 'Raleigh (RDU)', time: '9:30 am', id: 2}
  ]

  testDataTrade: any[] = [
    {to: 'Dallas/Fort Worth (DFW)', from: 'Raleigh (RDU)', time: '9:30 am', id: 3}
  ]

  currentSelected: any = {};
  tradeSelected: any = {};

  @ViewChild('grid', {static: false}) grid: DxDataGridComponent
  @ViewChild('grid2', {static: false}) grid2: DxDataGridComponent

  onRowSelect(e: any) {
    console.log(e)
  }

  onCurrentSelect(e: any) {
    // e.key is the row's object
    this.currentSelected = e.key
  }

  onTradeSelect(e: any) {
    this.tradeSelected = e.key
  }

  onTradeClick() {
    if (this.currentSelected && this.tradeSelected) {

    }
  }

}
