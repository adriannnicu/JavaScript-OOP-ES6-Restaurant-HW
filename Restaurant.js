export default class Restaurant {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.reservations = [];
        this.menu = [];
        this.orders = [];
    }

    addReservation(reservation) {
        this.reservations.push(reservation);
        console.log(`${reservation.name} make a reservation in ${reservation.date} at ${reservation.time} at ${reservation.guestCount} members.`)
    }

    removeReservation(reservationName) {
        this.reservations = this.reservations.filter(reservation => reservation.name !== reservationName);
    }

    checkAvailability() {
        const emptySeats = this.capacity - this.getGuestCount();

        console.log(`**** EMPTY SEATS ****`);
        if(this.isFullyBooked()) {
            console.log(`We dont have seats available.`)
        } else {
            console.log(`We have available ${emptySeats} seats.`);
        }
    }

    listReservations() {
        console.log(`***** RESERVATIONS *****`);
        if(this.reservations.length === 0) {
            console.log(`No reservations at this moment.`);
        } else {
            console.log(`Reservations Count: ${this.reservations.length}`)
            this.reservations.map((reservation) => {
                console.log(`Name: ${reservation.name} - Date: ${reservation.date} - Time: ${reservation.time} - Table Size: ${reservation.guestCount}`);
            })
        }
    }

    isReservationAvailable(reservationName){
        return this.reservations.some(reservation => reservation.name === reservationName);
    }

    isFullyBooked() {
        return this.getGuestCount() >= this.capacity;
    }

    getGuestCount() {
        return this.reservations.reduce((total, reservation) => total + reservation.guestCount, 0);
    }

    sortReservationsAlphabetically() {
        return this.reservations.map(reservation => reservation.name).sort();
    }

    addOrder(order) {
        this.orders.push(order);
    }

    removeOrder(tableNumber) {
        this.orders = this.orders.filter(order => order.tableNumber !== tableNumber);
    }

    listOrders() {
        console.log(`***** ORDERS *****`);
        if(this.orders.length === 0) {
            console.log(`No orders`);
        } else {
            console.log(`Orders Count: ${this.orders.length}`);
            this.orders.map((order) => {
                console.log(`Table Number: ${order.tableNumber} - Total Price: ${order.totalPrice}`);
            });
        }
        console.log(`******************`);
    }

    getTotalRevenue() {
        const totalRevenue = this.orders.reduce((total, order) => total + order.totalPrice, 0);
        
        console.log(`Total Revenue: ${totalRevenue}.`)
    }

    addMenuItem(item) {
        this.menu.push(item);
    }

    removeMenuItem(itemName) {
        this.menu = this.menu.filter(item => item.name !== itemName);
    }

    listMenuItems() {
        console.log(`***** MENU *****`)
        if(this.menu.length === 0) {
            console.log(`Menu is empty.`)
        } else {
            console.log(`Menu Count: ${this.menu.length} items.`);
            this.menu.map((menu) => {
                console.log(`${menu.name} - Price: ${menu.price}`);
            })
        }
        console.log(`*****************`);
    }
}