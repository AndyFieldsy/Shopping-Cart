/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var totalBody = document.getElementById('tbody');
  if(totalBody) {
  totalBody.remove();
  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
// TODO: Find the table body
var totalBody = document.getElementsByTagName('tbody')[0];
// TODO: Iterate over the items in the cart
for(var i2 = 0; i2 < cart.items.length; i2++) {
// TODO: Create a TR
console.log(totalBody);
var trCreate = document.createElement('tr');
// TODO: Create a TD for the delete link, quantity,  and the item
var tdCreate = document.createElement('td');
tdCreate.textContent = 'Delete Link     ' + 'Total amount: ' + cart.items[i2].quantity + ' Product Name: ' + cart.items[i2].product
var tdFind = document.getElementById('td');
trCreate.appendChild(tdCreate)
// TODO: Add the TR to the TBODY and each of the TD's to the TR
          totalBody.appendChild(tdCreate);

        }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
