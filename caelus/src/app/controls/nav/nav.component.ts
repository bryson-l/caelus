import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input('title') title: string = 'Title'

  @Output('onTabSelect') onTabSelect = new EventEmitter()

  ngOnInit() {
  }

  onTabClick(componentName: string) {
    this.onTabSelect.emit(componentName)
  }

}
