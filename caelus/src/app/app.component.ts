import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TabDirective } from './anchor/anchor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Caelus';
  @ViewChild(TabDirective, {static: true}) tabHost: TabDirective;
  interval: any;
  selectedTab: string = "HomeComponent"

  constructor() { }

  ngOnInit() {
    
  }

  onTabSelect(e: any) {
    this.selectedTab = e
  }

}