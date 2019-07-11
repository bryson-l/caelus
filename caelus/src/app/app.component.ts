import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Caelus';
  interval: any;
  selectedTab: string = "HomeComponent"

  constructor() { }

  ngOnInit() {

  }

  onTabSelect(e: any) {
    this.selectedTab = e
  }

}