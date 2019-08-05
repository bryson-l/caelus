import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  testData: any[] = [
    {from: "RDU", to: "CLT", time: "8:15 a.m, August 3, 2019"},
    {from: "CLT", to:"DFW", time: "9:30 a.m, August 3, 2019"},
    {from: "DFW", to: "JFK", time: "12:30 p.m, August 3, 2019"}
  ]
  
  @ViewChild('grid', {static: false}) grid: DxDataGridComponent
  @ViewChild('grid2', {static: false}) grid2: DxDataGridComponent

  xTitle: string = "Home Widget"

}
