import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  testData: any[] = [
    {city: 'Raleigh', abbrev: 'RDU', id: 1},
    {city: 'Atlanta', abbrev: 'ATL', id: 2},
    {city: 'Los Angeles', abbrev: 'LAX', id: 3},
    {city: 'Chicago', abbrev: 'ORD', id: 4},
    {city: 'Dallas/Fort Worth', abbrev: 'DFW', id: 5},
    {city: 'Denver', abbrev: 'DEN', id: 6},
    {city: 'New York', abbrev: 'JFK', id: 7}
  ]
  @ViewChild('grid', {static: false}) grid: DxDataGridComponent
  @ViewChild('grid2', {static: false}) grid2: DxDataGridComponent

  xTitle: string = "Home Widget"

}
