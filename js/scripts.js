function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
};

let pizza = new Pizza('small', ['cheese', 'pepperoni']);

Pizza.prototype.finalPrice = function(size, toppings) {
  // if (size === 'medium') {
  //   size = 2;
  // } else if (size === 'large') {
  //   size = 4;
  // } else size = 0;

  // this.price += (size + toppings);
  // return this.price;
  size = size;
  toppings = toppings;
  return `This is a ${size} pizza with ${toppings} for $${this.price}.`
}

let price = pizza.finalPrice('small', ['cheese', 'pepperoni']);
console.log(price);