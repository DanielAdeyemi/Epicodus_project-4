function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
}

let pizza = new Pizza('small', ['cheese', 'pepperoni']);
console.log(pizza);