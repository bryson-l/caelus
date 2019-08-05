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

  

}