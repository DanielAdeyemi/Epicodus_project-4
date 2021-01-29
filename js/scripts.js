function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 7;
};


Pizza.prototype.finalPrice = function() {
  if (this.size === 'Medium') size = 2; // {} were omitted intentionally - we can do it if {if-else} condition has only 1 line of code
  else if (this.size === 'Large') size = 4;
  else size = 0;
  const topping = this.toppings.length;
  this.price += (size + topping);
  return this.price;
}

// let pizza = new Pizza('large', ['cheese', 'pepperoni']);
// let price = pizza.finalPrice();
// console.log(price);

$(document).ready(function() {
  const choices = ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Extra Cheese', 'Olives', 'Pineapple'];
  choices.forEach(function(choice) {
    $('.toppings').append(`<div class="form-check">
    <input class="form-check-input" type="checkbox" name="choice" value="${choice}">
    <label class="form-check-label" for="${choice}">
      ${choice}
    </label>
  </div>`);
  })
  $('form').submit(function(event1) {
    event1.preventDefault();
    const size = $('input:radio[name=size]:checked').val();
    let toppings = [];
    $('input:checkbox[name=choice]:checked').each(function() {
      let topping = $(this).val();
      toppings.push(topping);
    });
    let pizza = new Pizza(size, toppings);
    const price = pizza.finalPrice();
    console.log(price);
    $('form')[0].reset();
  });
});