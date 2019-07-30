import data from '../data/pilots.js'

export class PilotService {

  constructor() { }

  getLoggedInUser() {
    // will eventually use http service request
    //return this.http.get(this.apiUrl + 'getLoggedInUser/' + this.loggedInUserId)

    // will for now be hardcoded to Bryson Longoria
    data.forEach(pilot => {
        if (pilot.first_name == 'Bryson' && pilot.last_name == 'Longoria') {
            return pilot
        }
    })
  }
}