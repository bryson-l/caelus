import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  testDataCurrent: any[] = [
    {to: 'Raleigh (RDU)', time: '8:00 am', id: 1},
    {to: 'Atlanta (ATL)', time: '9:30 am', id: 2}
  ]

  @ViewChild('grid', {static: false}) grid: DxDataGridComponent

  onRowSelect(e: any) {
    console.log(e)
  }

  onTradeClick() {
    
  }

}
