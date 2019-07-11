import { CommonModule } from '@angular/common';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { TestComponent } from './test-control/test.component';

@NgModule({
  imports: [CommonModule],
  entryComponents: [  ],
  declarations: [
    TestComponent
  ],
  exports: [ TestComponent ],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    },
  ]
})
export class ControlsModule {}