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
  
}