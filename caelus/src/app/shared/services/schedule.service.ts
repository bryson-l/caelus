import data from '../data/schedule.js'
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.js';
import { of } from 'rxjs'
import { Flight } from '../models/flight.js';
import { nextTick } from 'q';

export class ScheduleService {

  constructor() { }

  getScheduleById(scheduleId: number): Observable<Schedule> {
      let returnValue: Observable<Schedule>
      data.forEach(schedule => {
          if (schedule.schedule_id == scheduleId) {
              returnValue = of(schedule)
          }
      })
      if (returnValue) {
        return returnValue
      }
      else {
          return null
      }
  }
  

}