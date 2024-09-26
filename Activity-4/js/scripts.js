var user = 'Jaima';
var salutation = 'howdy, ';
var greeting = salutation + user + '! Here are the latest Moster reviews!';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

var price = 2.99,
    discount = .50, 
    salePrice = price - discount,
    priceEl = document.getElementById('price'),
    salePriceEl = document.getElementById('sale-price');

priceEl.textContent = price.toFixed(2);
salePriceEl.textContent = salePrice.toFixed(2);

