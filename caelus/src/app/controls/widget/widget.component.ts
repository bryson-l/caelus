import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {

  constructor() { }

  @Input('test') class: string

  ngOnInit() {
  }

}
