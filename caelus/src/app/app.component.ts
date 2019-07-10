import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { TabDirective } from './anchor/anchor.component';
import { TabComponent } from './tabs/tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Caelus';
  tabComponent: TabComponent
  //tabs = this.tabComponent.tabMap
  selectedTab: string = 'home'
  @ViewChild(TabDirective, {static: true}) tabHost: TabDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //this.loadComponent();
  }

  ngOnDestroy() {

  }

  // loadComponent() {
  //   const tabItem = this.tabs[this.selectedTab];

  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tabItem.component);

  //   const viewContainerRef = this.tabHost.viewContainerRef;
  //   viewContainerRef.clear();

  //   const componentRef = viewContainerRef.createComponent(componentFactory);
  //   (<TabComponent>componentRef.instance).data = tabItem.data;
  // }
}