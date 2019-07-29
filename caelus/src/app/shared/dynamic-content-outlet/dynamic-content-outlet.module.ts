import { CommonModule } from '@angular/common';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { DynamicContentOutletErrorComponent } from './dynamic-content-outlet-error.component';
import { DynamicContentOutletComponent } from './dynamic-content-outlet.component';
import { DynamicContentOutletService } from './dynamic-content-outlet.service';

@NgModule({
  imports: [CommonModule],
  entryComponents: [ DynamicContentOutletErrorComponent, DynamicContentOutletComponent ],
  declarations: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ],
  exports: [DynamicContentOutletComponent],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    },
    DynamicContentOutletService
  ]
})
export class DynamicContentOutletModule {}