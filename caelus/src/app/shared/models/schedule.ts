import { Flight } from './flight';
import { FlightService } from '../services/flight.service';

export class Schedule {
    scheduleId: number = -1;
    pilotId: number = -1;
    flightIds: number[] = [];
    constructor(array?: any[], pilotId?: number) {
        if (array) {
            array.forEach(element => {
                this.flightIds.push(element.flight_id)
            })
        }
        if (pilotId) {
            this.pilotId = pilotId
        }
    }

    isValidSchedule(flightService: FlightService, index?: number): boolean {
        if (index && index == this.flightIds.length - 1) {
            return true
        }
        else {
            if (index) {
                let currId = this.flightIds[index]
                let nextId: number
                if (index + 1 < this.flightIds.length - 1) {
                    nextId = this.flightIds[index + 1]
                }
                let curr: Flight
                let next: Flight
                // need to set these variables to the actual flight objects in the database
                flightService.getFlightById(currId)
                             .subscribe(data => {curr = data})
                flightService.getFlightById(nextId)
                             .subscribe(data => {next = data})
                if (curr.end == next.start) {
                    return this.isValidSchedule(flightService, index++)
                }
                else {
                    return false
                }
            }
        }
      }
}