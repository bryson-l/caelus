import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DynamicContentOutletErrorComponent } from '../dynamic-content-outlet/dynamic-content-outlet-error.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, DynamicContentOutletErrorComponent],
  imports: [CommonModule],
  entryComponents: [HomeComponent, DynamicContentOutletErrorComponent],
  exports: [HomeComponent, AboutComponent]
})
export class MySpecialDynamicContentModule {
  static dynamicComponentsMap = {
    HomeComponent,
    AboutComponent,
    DynamicContentOutletErrorComponent
  };
}