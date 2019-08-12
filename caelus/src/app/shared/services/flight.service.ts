import data from '../data/flights.js'
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.js';
import moment from 'moment';
import { of } from 'rxjs';

export class FlightService {

  constructor() { }

  getFlightById(flightId: number): Observable<Flight> {
      let returnValue: Observable<Flight>
      data.forEach(flight => {
          if (flight.flight_id == flightId) {
              returnValue = of(flight)
          }
      })
      if (returnValue) {
          return returnValue
      }
      else {
          return null
      }
  }

  getAllFlights(): Observable<Flight[]> {
      return data
  }

  // this function is hideous, need to rewrite
  getValidTrades(flightId: number, currentSchedule: Flight[]): Observable<Flight[]> {
      let tradeFor: any
      data.forEach(flight => {
          if (flight.flight_id == flightId) {
            tradeFor = flight
          }
      })
      let prevFlightIndex: number
      for ( let i = 0; i < currentSchedule.length; i++) {
          if (currentSchedule[i].flight_id == flightId && i != 0) {
            prevFlightIndex = i - 1
          }
      }
      let prevFlight: Flight
      if (prevFlightIndex) {
        prevFlight = currentSchedule[prevFlightIndex]
      }
      else {
        prevFlight = null
      }
      let validTrades: Flight[] = []
      data.forEach(flight => {
        // need to write function to check if a trade conflicts with the rest of current schedule
        if (this.isValidTrade(tradeFor, flight, prevFlight)) {
            validTrades.push(flight)
        }
      })
      if (validTrades.length || Array.isArray(validTrades)) {
        return of(validTrades);
      }
      else {
          return null
      }
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
  
  // need to redo this whole thing, there needs to be a check for a valid schedule vs a check for a valid trade.
  // a valid trade does not need to align with the rest of the schedule. defeats purpose. just needs to be possible with the previous flight destination and arrival time
  // valid schedule will be handled elsewhere

//   isValidTrade(tradeFor: Flight, tradeAway: Flight, currentSchedule: Flight[]): boolean {
//     let tradeIndex = 0
//     for (let i = 0; i < currentSchedule.length; i++) {
//         if (currentSchedule[i] == tradeAway) {
//             tradeIndex = i
//             break
//         }
//     }
//     let nextFlight = currentSchedule[tradeIndex + 1]
//     // checks if it trade for flight is within a certain window of time from the trade away flight
//     let minAhead: boolean = (moment(tradeAway.departure_time).add(15, 'minutes') > moment(tradeFor.departure_time))
//     let minBehind: boolean = (moment(tradeAway.departure_time).subtract(15, 'minutes') < moment(tradeFor.departure_time))
//     let timeForNextFlight: boolean = true
//     if (moment(nextFlight.departure_time).toDate() == moment(tradeFor.arrival_time).toDate()) {
//         timeForNextFlight = (moment(tradeFor.arrival_time) < moment(nextFlight.departure_time).subtract(15, 'minutes'))
//     }
//     // need to check that the arrival location matches the next flight departure location
//     let rightLocation: boolean = tradeFor.end == nextFlight.start
//     return (minAhead && minBehind && timeForNextFlight && rightLocation)
//   }

  

}