function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
};

let pizza = new Pizza('small', ['cheese', 'pepperoni']);

Pizza.prototype.finalPrice = function(size, toppings) {
  if (size === 'medium') {
    size = 2;
  } else if (size === 'large') {
    size = 4;
  } else size = 0; // {} were omiited intentionally - we can do it if statement has only 1 line of code
  if (toppings.length > 0) topping = 1;
  // topping = 0;
  // toppings.forEach(function() {
  //   topping += 1;
  // })
  this.price += (size + topping);
  return this.price;
}

let price = pizza.finalPrice('medium', ['cheese']);
console.log(price);