import data from '../data/schedule.js'
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.js';

export class ScheduleService {

  constructor() { }

  getScheduleById(scheduleId: number): Observable<Schedule> {
      data.forEach(schedule => {
          if (schedule.schedule_id == scheduleId) {
              return schedule
          }
      })
      return null
  }

  

}