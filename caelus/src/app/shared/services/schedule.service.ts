import data from '../data/schedule.js'

export class ScheduleService {

  constructor() { }

  getSchedule(scheduleId: number) {
      data.forEach(schedule => {
          if (schedule.schedule_id == scheduleId) {
              return schedule
          }
      })
  }

  

}