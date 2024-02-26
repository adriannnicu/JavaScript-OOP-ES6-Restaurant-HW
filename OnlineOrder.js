import Order from "./Order.js";

export default class OnlineOrder extends Order {
    constructor(tableNumber, items, deliveryAddress) {
        super(tableNumber, items);
        this.deliveryAddress = deliveryAddress;
    }
}