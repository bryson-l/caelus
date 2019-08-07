import data from '../data/pilots.js'
import { Observable, of } from 'rxjs';
import { Pilot } from '../models/pilot.js';

export class PilotService {

  constructor() { }

  getLoggedInUser(): Observable<Pilot> { // this is disgusting i want to puke
    // will eventually use http service request
    //return this.http.get(this.apiUrl + 'getLoggedInUser/' + this.loggedInUserId)
    let returnValue: Observable<Pilot> = null
    // will for now be hardcoded to Bryson Longoria
    data.forEach(pilot => {
        if (pilot.first_name == 'Bryson' && pilot.last_name == 'Longoria') {
            returnValue =  of(pilot)
        }
    })
    return returnValue
  }

  getPilotById(pilotId: number): Observable<Pilot> {
    data.forEach(pilot => {
      if (pilot.pilot_id == pilotId) {
        return pilot
      }
    })
    return null
  }

}