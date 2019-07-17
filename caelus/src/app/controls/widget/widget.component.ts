import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {

  constructor() { }

  @Input('className') className: string = "col-lg-12"
  @Input('xTitle') xTitle: string = "Title"

  ngOnInit() {
  }

}
