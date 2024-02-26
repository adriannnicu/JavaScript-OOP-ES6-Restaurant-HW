export default class Order {
    constructor(tableNumber, items) {
        this.tableNumber = tableNumber;
        this.items = items;
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (let item of this.items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }
}