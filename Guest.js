import Reservation from "./Reservation.js";

export default class Guest extends Reservation {
    constructor(name, date, time, guestCount, specialRequests) {
        super(name, date, time, guestCount);
        this.specialRequests = specialRequests;
    }
}