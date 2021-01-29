function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
};

let pizza = new Pizza('small', ['cheese', 'pepperoni']);

Pizza.prototype.finalPrice = function(size, toppings) {
  this.price += (size + toppings);
  return this.price;
}

let price = pizza.finalPrice(1, 1);
console.log(price);