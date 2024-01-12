const EventEmitter = require("events");

const pizza = new EventEmitter();

pizza.on("select", () => {
  setTimeout(() => {
    console.log("You have selected the pizza");
  }, 1000);
});

pizza.on("select", (toppings) => {
  console.log("You have selected the pizza with toppings of" + toppings);
});

module.exports = pizza;
