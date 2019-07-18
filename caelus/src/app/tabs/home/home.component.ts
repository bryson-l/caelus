import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  testData: any[] = [
    {from: "RDU", to: "CLT", time: "August 3, 2019 8:15 a.m"},
    {from: "CLT", to:"DFW", time: "August 3, 2019 9:30 a.m"},
    {from: "DFW", to: "JFK", time: "August 3, 2019 12:30 p.m"}
  ]
  @ViewChild('grid', {static: false}) grid: DxDataGridComponent
  @ViewChild('grid2', {static: false}) grid2: DxDataGridComponent

  xTitle: string = "Home Widget"

}
