import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input('title') title: string = 'Title'
  @Output('onMenuItemClick') onMenuItemClick = new EventEmitter()

  ngOnInit() {
  }

  setComponent(componentName: string) {
    this.onMenuItemClick.emit(componentName)
  }
}
