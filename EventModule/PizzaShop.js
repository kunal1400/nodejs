const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order() {
    this.emit("order", this.orderNumber);
    this.orderNumber++;
  }

  displayOrder() {
    return this.orderNumber;
  }
}

module.exports = PizzaShop;
