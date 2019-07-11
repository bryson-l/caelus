import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DynamicContentOutletModule } from '../dynamic-content-outlet/dynamic-content-outlet.module';
import { DynamicContentOutletErrorComponent } from '../dynamic-content-outlet/dynamic-content-outlet-error.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from '../controls/test-control/test.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, TestComponent],
  imports: [CommonModule, DynamicContentOutletModule],
  entryComponents: [HomeComponent, DynamicContentOutletErrorComponent, AboutComponent]
})
export class MySpecialDynamicContentModule {
  static dynamicComponentsMap = {
    HomeComponent,
    AboutComponent,
    DynamicContentOutletErrorComponent
  };
}