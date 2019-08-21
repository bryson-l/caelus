import data from '../data/schedule.js'
import flightData from '../data/flights.js'
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.js';
import { of } from 'rxjs'
import { Flight } from '../models/flight.js';
import moment from 'moment';
import { HttpClient } from '@angular/common/http';


export class ScheduleService {

    constructor(private http: HttpClient) { }

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
    let cleanSchedule: Schedule = currentSchedule
    if (index > 0) {
        prevFlight = currentSchedule[index - 1]
    }
    else {
        prevFlight = new Flight({})
    }
    if (this.isValidTrade(tradeFor, tradeAway, prevFlight)) {
        // do some stuff to trade the flights here

        // this gets the tradeAway out of the currentSchedule
        let tradeA: number
        if (index < currentSchedule.flightIds.length-1) {
            tradeA = currentSchedule.flightIds.slice(index, index+1)[0]
            let part1 = currentSchedule.flightIds.slice(0, index)
            let part2 = currentSchedule.flightIds.slice(index+1)
            currentSchedule.flightIds = part1.concat(part2)
        }
        else {
            tradeA = currentSchedule.flightIds.pop()
        }
        // now to add the tradeFor to the currentSchedule
        currentSchedule.flightIds.push(tradeFor.flight_id)
        return {status: 'success', schedule: currentSchedule}
    }
    else {
        return {status: 'this is not a valid trade', schedule: cleanSchedule}
    }
  }

  getIndex(flight: Flight, schedule: Schedule): number {
    let flights: any[] = this.flightIdsToFlights(schedule.flightIds)
    let returnIndex: number
    for (let i=0; i < flights.length; i++) {
        if (flights[i] == flight) {
            returnIndex = i
        }
    }
    return returnIndex
  }

  flightIdsToFlights(flightIds: number[]) {
      let returnValue: Flight[] = []
      flightIds.forEach(flightId => {
        flightData.forEach((flight: Flight) => {
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
    if (previousFlight.start) {
        if (moment(previousFlight.arrival_time).add(15, 'minutes') > moment(tradeFor.departure_time)) {
            timeFromPrevFlight = false
        }
    }
    return (sameStart && timeFromPrevFlight)
  }
}