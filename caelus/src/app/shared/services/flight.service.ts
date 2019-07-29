import data from '../data/flights.js'

export class FlightService {

  constructor() { }

  getFlight(flightId: number) {
      data.forEach(flight => {
          if (flight.flight_id == flightId) {
              return flight
          }
      })
  }

  

}