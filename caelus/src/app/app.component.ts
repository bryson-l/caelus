import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NavComponent } from './controls/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Caelus';
  @ViewChild('navbar', {static: false}) navbar: NavComponent;
  interval: any;
  componentName: string;

  constructor() { }

  ngOnInit() {
    //this.loadComponent();
  }

  loadComponent(selectedComponent: string) {
    this.componentName = selectedComponent
  }

}