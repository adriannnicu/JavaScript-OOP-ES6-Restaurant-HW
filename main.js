import Restaurant from "./Restaurant.js";
import Reservation from "./Reservation.js";
import Guest from "./Guest.js";
import Order from "./Order.js";
import OnlineOrder from "./OnlineOrder.js";
import MenuItem from "./MenuItem.js";

const restaurant = new Restaurant('Taverna Gruiu', 100);
console.log(restaurant);

// Reservations
const reservation1 = new Reservation('Adrian Nicu', '20-02-2024', '20:00', 10);
restaurant.addReservation(reservation1);

const reservation2 = new Reservation('Mihai Cristian', '20-02-2024', '20:00', 20);
restaurant.addReservation(reservation2);

const reservation3 = new Guest('Andrei Ionut', '20-02-2024', '20:00', 20, 'Jazz Music');
restaurant.addReservation(reservation3);

restaurant.removeReservation(reservation2);
// List Of Menu
const pizza = new MenuItem('Pizza', 40);
restaurant.addMenuItem(pizza);

const barbeque = new MenuItem('Barbeque', 30);
restaurant.addMenuItem(barbeque);

const fish = new MenuItem('Fish', 60);
restaurant.addMenuItem(fish);

const juice = new MenuItem('CocaCola', 10);
restaurant.addMenuItem(juice);

const wine = new MenuItem('Wine', 100);
restaurant.addMenuItem(wine);

// Add Restaurant Order
const order1 = new Order(1, [pizza, fish]);
restaurant.addOrder(order1);
const order2 = new Order(2, [wine, juice]);
restaurant.addOrder(order2);

const onlineOrder1 = new OnlineOrder(1, [pizza, juice], 'Bd. Unirii 68');
restaurant.addOrder(onlineOrder1);

// View list of menu items
restaurant.listMenuItems()

// View list of reservation
restaurant.listReservations()

// View list of orders
restaurant.listOrders();

// Total Revenue
restaurant.getTotalRevenue();

// Empty Seats
restaurant.checkAvailability();

