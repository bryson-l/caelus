import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DynamicContentOutletModule } from '../dynamic-content-outlet/dynamic-content-outlet.module';
import { DynamicContentOutletErrorComponent } from '../dynamic-content-outlet/dynamic-content-outlet-error.component';
import { AboutComponent } from './about/about.component';
import { ControlsModule } from '../controls/controls.module';
import { ScheduleComponent } from 'src/app/shared/tabs/schedule/schedule.component';
import { ServicesModule } from '../services/services.module';
import { PilotService } from '../services/pilot.service';
import { FlightService } from '../services/flight.service';
import { ScheduleService } from '../services/schedule.service';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ScheduleComponent],
  imports: [CommonModule, DynamicContentOutletModule, ControlsModule, ServicesModule],
  entryComponents: [HomeComponent, DynamicContentOutletErrorComponent, AboutComponent, ScheduleComponent],
  exports: [ DynamicContentOutletModule, ControlsModule, ServicesModule ]
})
export class MySpecialDynamicContentModule {
  static dynamicComponentsMap = {
    HomeComponent,
    AboutComponent,
    DynamicContentOutletErrorComponent,
    ScheduleComponent
  };
  
  static forRoot() {
    return {
        ngModule: MySpecialDynamicContentModule,
        providers: [ PilotService, FlightService, ScheduleService ]
    }
  }
}