function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
};


Pizza.prototype.finalPrice = function() {
  if (this.size === 'medium') size = 2; // {} were omitted intentionally - we can do it if {if-else} condition has only 1 line of code
  else if (this.size === 'large') size = 4;
  else size = 0;
  const topping = this.toppings.length;
  this.price += (size + topping);
  return this.price;
}

let pizza = new Pizza('large', ['cheese', 'pepperoni']);
let price = pizza.finalPrice();
console.log(price);

// $(document).ready(function() {
//   $('form').submit(function(event1) {
//     event1.preventDefault();
//     const size = $('#size');
//     let toppings = [];
//     $('input:checkbox[name=choice].checked').each(function() {
//       let topping = $(this).val();
//       toppings.push(topping);
//     });
//     let pizza = new Pizza(size, toppings);
//     let price = pizza.finalPrice(size, toppings);
//   });
// })