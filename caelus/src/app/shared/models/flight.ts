export class Flight {
    flight_id: number = -1;
    start: string;
    end: string;
    departure_time: Date; // will later be changed to a date time
    arrival_time: Date;
    constructor(obj: any) {
        this.flight_id = obj.flightId
        this.start = obj.start
        this.end = obj.end
        this.departure_time = obj.departureTime
        this.arrival_time = obj.arrivalTime
    }
}