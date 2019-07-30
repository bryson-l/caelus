import { CommonModule } from '@angular/common';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { TestComponent } from './test-control/test.component';
import { DevExtremeModule } from '../../../../node_modules/devextreme-angular/ui/all'
import { DxDataGridComponent } from '../../../../node_modules/devextreme-angular/ui/data-grid'
import { DxDataGridModule } from '../../../../node_modules/devextreme-angular/ui/data-grid'
import { WidgetComponent } from 'src/app/shared/controls/widget/widget.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, DevExtremeModule, DxDataGridModule],
  entryComponents: [  ],
  declarations: [
    TestComponent,
    WidgetComponent,
    WidgetComponent,
    NavComponent
  ],
  exports: [ 
    TestComponent,
    DxDataGridComponent, 
    DxDataGridModule, 
    WidgetComponent,
    NavComponent, ],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    },
  ]
})
export class ControlsModule {}