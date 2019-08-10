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

  getValidTrades(flightId: number, currentSchedule: Flight[]): Observable<Flight[]> {
      let tradeFor: any
      data.forEach(flight => {
          if (flight.flight_id == flightId) {
            tradeFor = flight
          }
      })
      let validTrades: Flight[] = []
      data.forEach(flight => {
        // need to write function to check if a trade conflicts with the rest of current schedule
        if (this.conflictsWithSchedule(currentSchedule, flight, tradeFor)) {
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
  
  conflictsWithSchedule(currentSchedule: Flight[], tradeFor: Flight, tradeAway: Flight): boolean {
      // tradeAway should be an existing element inside of currentSchedule
      // first get the index for tradeAway
      let tradeIndex = 0
      for (let i = 0; i < currentSchedule.length; i++) {
          if (currentSchedule[i] == tradeAway) {
              tradeIndex = i
              break
          }
      }
      // pass in tradeFor, tradeAway, and currentSchedule[i + 1] into isValidTrade
      return this.isValidTrade(tradeFor, tradeAway, currentSchedule[tradeIndex + 1])
  }

  isValidTrade(tradeFor: Flight, tradeAway: Flight, nextFlight: Flight): boolean { 
      // checks if it trade for flight is within a certain window of time from the trade away flight
      let minAhead: boolean = (moment(tradeAway.departure_time).add(15, 'minutes') > moment(tradeFor.departure_time))
      let minBehind: boolean = (moment(tradeAway.departure_time).subtract(15, 'minutes') < moment(tradeFor.departure_time))
      let timeForNextFlight: boolean = true
      if (nextFlight) {
          timeForNextFlight = (moment(tradeFor.arrival_time) < moment(nextFlight.departure_time).subtract(15, 'minutes'))
      }
      return (minAhead && minBehind && timeForNextFlight)
  }

}