import { NgModule } from "@angular/core";
import { PilotService } from './services/pilot.service';
import { FlightService } from './services/flight.service';
import { ScheduleService } from './services/schedule.service';
import { MySpecialDynamicContentModule } from './tabs/tabs.module';
import { ServicesModule } from './services/services.module';
import { ControlsModule } from './controls/controls.module';
import { DynamicContentOutletComponent } from './dynamic-content-outlet/dynamic-content-outlet.component';

@NgModule({
    declarations: [  ],
    entryComponents: [  ],
    imports: [ MySpecialDynamicContentModule, ServicesModule, ControlsModule ],
    exports: [ MySpecialDynamicContentModule, ServicesModule, ControlsModule ]
})
export class SharedModule {

    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ PilotService, FlightService, ScheduleService ]
        }
    }
}