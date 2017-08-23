window.onload = function() {
  let cartButton = document.querySelector('#cart-button');
  let closeButton = document.querySelector('#close-button');
  let sectionSideBar = document.querySelector('.sidebar');
  let addToCartButtons = document.getElementsByClassName('add-to-cart');
  let clearButton = document.querySelector('#clear-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart)
  };
  cartButton.addEventListener('click', modalPopup);
  closeButton.addEventListener('click', closeModal);
  sectionSideBar.addEventListener('click', sectionScroll);
  clearButton.addEventListener('click', clearCart);
}

// Change modal and modal-overlay display to be flex
function modalPopup() {
  let modal = document.querySelector('.modal');
  let modalOverlay = document.querySelector('.modal-overlay');
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
};

// Have it set modal and modal-overlay display to be none
function closeModal() {
  let modal = document.querySelector('.modal');
  let modalOverlay = document.querySelector('.modal-overlay');
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
};

// Function to scroll to a section when clicked in the sidebar
function sectionScroll() {
  let h3 = document.getElementsByTagName('h3');
  if (event.target.innerHTML === 'Produce') {
    h3[0].scrollIntoView()
  }
  else if (event.target.innerHTML === 'Deli') {
    h3[1].scrollIntoView()
  }
  else if (event.target.innerHTML === 'Frozen') {
    h3[2].scrollIntoView()
  }
}

/* Function to add items to the cart; adds items to the hidden modal cart,
increments the number next to the cart button, and calculates the total */
function addToCart() {
  let cartButton = document.querySelector('#cart-item-count');
  let cartItems = document.querySelector('#cart-items');
  let total = document.querySelector('#total');
  let li = document.createElement('li');
  let addToCartButtons = document.getElementsByClassName('add-to-cart');
  let itemNames = document.getElementsByClassName('item-name');
  let itemPrices = document.getElementsByClassName('item-price');
  let integerCartButton = parseInt(cartButton.innerHTML);
  integerCartButton += 1;
  cartButton.innerHTML = integerCartButton;
  // replace(/\$/, '')
  for (var i = 0; i < addToCartButtons.length; i++) {
    if (event.target === addToCartButtons[i]) {
      cartItems.append(itemNames[i].innerHTML, li);
      cartItems.append(itemPrices[i].innerHTML, li);
      total.innerHTML = total.innerHTML.replace(/[a-zA-Z\$]/g, '');
      let integerTotal = parseFloat(total.innerHTML);
      integerTotal += parseFloat(itemPrices[i].innerHTML.replace(/[a-zA-Z\$]/g, ''));
      total.innerHTML = 'Total $' + integerTotal;
    }
  };
}

/* Function to make clear button remove all items from the cart, reset the total
t0 $0.00 and reset the cart counter to 0 */
function clearCart() {
  let cartItems = document.querySelector('#cart-items');
  let total = document.querySelector('#total');
  let cartButton = document.querySelector('#cart-item-count');
  cartItems.innerHTML = '';
  total.innerHTML = 'Total $0.00';
  cartButton.innerHTML = '0';
}
