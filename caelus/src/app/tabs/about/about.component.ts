import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      this.grid.instance.selectRowsByIndexes([0])
      this.grid.dataSource = [
        {to: 'Raleigh (RDU)', from: 'Raleigh (RDU)', time: '8:00 am', id: 1},
        {to: 'Atlanta (ATL)', from: 'Raleigh (RDU)', time: '9:30 am', id: 2}
      ]
      this.grid2.dataSource = []
      if (this.grid.selectedRowKeys.length < 1) {
        this.grid2.dataSource = []
      }
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

  setTradeData() {
    this.testDataTrade = [
      {to: 'Dallas/Fort Worth (DFW)', from: 'Raleigh (RDU)', time: '9:30 am', id: 3}
    ]
  }

  onCurrentSelect(e: any) {
    // e.key is the row's object
    this.currentSelected = e.key
    if (e.key.time == '9:30 am') {
      this.setTradeData()
    }
  }

  onTradeSelect(e: any) {
    this.tradeSelected = e.key
  }

  onTradeClick() {
    if (this.currentSelected && this.tradeSelected) {
      // removes the selected items from their respective data grids
      let index = this.grid.instance.getRowIndexByKey(this.currentSelected.id)
      this.grid.dataSource.slice(0, index)
      let index2 = this.grid2.instance.getRowIndexByKey(this.tradeSelected.id)
      if (index2 > 1) {
        this.grid2.dataSource.slice(0, index)
      }
      else {
        this.grid2.dataSource.slice(1, this.grid2.dataSource.length)
      }
      // adds the selected items to the opposite grid
      this.grid.dataSource.push(this.tradeSelected)
      this.grid2.dataSource.push(this.currentSelected)
      // deselect all and set the selected variables to nothing
      this.grid.instance.clearSelection()
      this.grid2.instance.clearSelection()
      this.currentSelected = {}
      this.tradeSelected = {}
    }
  }

}
