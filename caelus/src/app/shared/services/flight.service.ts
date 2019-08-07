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

  getValidTrades(flightId: number): Observable<Flight[]> {
      let tradeFor: Flight
      data.forEach(flight => {
          if (flight.flight_id == flightId) {
            tradeFor = flight
          }
      })
      let validTrades: Flight[] = []
      data.forEach(flight => {
        // NEED TO IMPLEMENT USE OF DATE OBJECTS SO I CAN EASILY CHECK FOR VALID TRADES
        let arrival = moment(tradeFor.arrivalTime)
        let departure = moment(flight.departure_time)
        if (arrival < departure.subtract(15, 'minutes')) {
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

}