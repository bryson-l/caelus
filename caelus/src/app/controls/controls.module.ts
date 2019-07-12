import { CommonModule } from '@angular/common';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { TestComponent } from './test-control/test.component';
import { DevExtremeModule } from '../../../node_modules/devextreme-angular/ui/all'
import { DxDataGridComponent } from '../../../node_modules/devextreme-angular/ui/data-grid'

@NgModule({
  imports: [CommonModule, DevExtremeModule],
  entryComponents: [  ],
  declarations: [
    TestComponent
  ],
  exports: [ TestComponent, DxDataGridComponent ],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    },
  ]
})
export class ControlsModule {}