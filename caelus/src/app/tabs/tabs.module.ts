import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DynamicContentOutletModule } from '../dynamic-content-outlet/dynamic-content-outlet.module';
import { DynamicContentOutletErrorComponent } from '../dynamic-content-outlet/dynamic-content-outlet-error.component';
import { AboutComponent } from './about/about.component';
import { ControlsModule } from '../controls/controls.module';
import { ScheduleComponent } from 'src/app/tabs/schedule/schedule.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ScheduleComponent],
  imports: [CommonModule, DynamicContentOutletModule, ControlsModule],
  entryComponents: [HomeComponent, DynamicContentOutletErrorComponent, AboutComponent, ScheduleComponent]
})
export class MySpecialDynamicContentModule {
  static dynamicComponentsMap = {
    HomeComponent,
    AboutComponent,
    DynamicContentOutletErrorComponent,
    ScheduleComponent
  };
}