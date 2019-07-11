import { CommonModule } from '@angular/common';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';
import { DynamicContentOutletErrorComponent } from './dynamic-content-outlet-error.component';
import { DynamicContentOutletComponent } from './dynamic-content-outlet.component';
import { DynamicContentOutletService } from './dynamic-content-outlet.service';
import { HomeComponent } from '../tabs/home/home.component';
import { AboutComponent } from '../tabs/about/about.component';
import { MySpecialDynamicContentModule } from '../tabs/tabs.module';

@NgModule({
  imports: [CommonModule, MySpecialDynamicContentModule],
  declarations: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ],
  entryComponents: [DynamicContentOutletErrorComponent, HomeComponent, AboutComponent],
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