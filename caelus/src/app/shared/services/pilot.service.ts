import data from '../data/pilots.js'
import { Observable } from 'rxjs';
import { Pilot } from '../models/pilot.js';

export class PilotService {

  constructor() { }

  getLoggedInUser(): any {
    // will eventually use http service request
    //return this.http.get(this.apiUrl + 'getLoggedInUser/' + this.loggedInUserId)

    // will for now be hardcoded to Bryson Longoria
    data.forEach(pilot => {
        if (pilot.first_name == 'Bryson' && pilot.last_name == 'Longoria') {
            return pilot
        }
    })
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