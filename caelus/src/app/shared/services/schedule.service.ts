import data from '../data/schedule.js'
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.js';
import { of } from 'rxjs'
import { Flight } from '../models/flight.js';
import moment from 'moment';

export class ScheduleService {

  constructor() { }

  getScheduleById(scheduleId: number): Observable<Schedule> {
      let returnValue: Observable<Schedule>
      data.forEach(schedule => {
          if (schedule.schedule_id == scheduleId) {
              returnValue = of(schedule)
          }
      })
      if (returnValue) {
        return returnValue
      }
      else {
          return null
      }
  }

  tradeFlights(tradeAway: Flight, tradeFor: Flight, currentSchedule: Schedule) {
    // need to get index for tradeAway and check if it is a valid trade
    let index = this.getIndex(tradeAway, currentSchedule)
    let prevFlight: Flight
    if (index > 0) {
        prevFlight = currentSchedule[index - 1]
    }
    else {
        prevFlight = new Flight({})
    }
    if (this.isValidTrade(tradeFor, tradeAway, prevFlight)) {
        // do some stuff to trade the flights here
    }
  }

  getIndex(flight: Flight, schedule: Schedule): number {
    let flights: any[] = this.flightIdsToFlights(schedule.flightIds)
    let returnIndex: number
    for (let i=0; i < flights.length; i++) {
        if (schedule[i] == flight) {
            returnIndex = i
        }
    }
    return returnIndex
  }

  flightIdsToFlights(flightIds: number[]) {
      let returnValue: Flight[]
      flightIds.forEach(flightId => {
        data.forEach((flight: Flight) => {
            if (flight.flight_id == flightId) {
                returnValue.push(flight)
            }
        })
      })
      return returnValue
  }

  isValidTrade(tradeFor: Flight, flight: Flight, previousFlight: Flight): boolean {
    let sameStart: boolean = tradeFor.start == flight.start
    let timeFromPrevFlight: boolean = true
    if (previousFlight) {
        if (moment(previousFlight.arrival_time).add(15, 'minutes') > moment(tradeFor.departure_time)) {
            timeFromPrevFlight = false
        }
    }
    return (sameStart && timeFromPrevFlight)
  }
  

}