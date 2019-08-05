import data from '../data/flights.js'
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.js';

export class FlightService {

  constructor() { }

  getFlightById(flightId: number): Observable<Flight> {
      data.forEach(flight => {
          if (flight.flight_id == flightId) {
              return flight
          }
      })
      return null
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
        // if (tradeFor.arrivalTime < flight.departure_time - 15) {

        // }
      })
      return null
  }  

}