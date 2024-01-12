// const pizza = require("./Pizza");

// pizza.emit("select");

// pizza.emit("select", "Onion");

// console.log("It is non blocking and based on event based");

/**
 * If we put the event listener at bottom or after order method
 * then it will not work because order is executed before
 * the event listener
 */
const pizzaShop = require("./PizzaShop");
const pizzaShopInstance = new pizzaShop();

pizzaShopInstance.on("order", (orderNumber) => {
  console.log("Pizza ordered and your order number is " + orderNumber);
});

pizzaShopInstance.order();
pizzaShopInstance.order();
pizzaShopInstance.order();

// console.log(pizzaShopInstance.displayOrder());
