import { CommonModule } from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import { FlightService } from './flight.service';
import { PilotService } from './pilot.service';
import { ScheduleService } from './schedule.service';

@NgModule({
  providers: [ FlightService, PilotService, ScheduleService ]
})
export class ServicesModule {
    constructor(@Optional() @SkipSelf() service: ServicesModule) {
        if (service) {
            throw new Error('you done goofed')
        }
    }
}