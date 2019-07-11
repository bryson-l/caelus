import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DynamicContentOutletModule } from '../dynamic-content-outlet/dynamic-content-outlet.module';
import { DynamicContentOutletErrorComponent } from '../dynamic-content-outlet/dynamic-content-outlet-error.component';
import { AboutComponent } from './about/about.component';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, DynamicContentOutletModule, ControlsModule],
  entryComponents: [HomeComponent, DynamicContentOutletErrorComponent, AboutComponent]
})
export class MySpecialDynamicContentModule {
  static dynamicComponentsMap = {
    HomeComponent,
    AboutComponent,
    DynamicContentOutletErrorComponent
  };
}