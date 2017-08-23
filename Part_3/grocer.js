window.onload = function() {
  let cartButton = document.querySelector('#cart-button');
  let closeButton = document.querySelector('#close-button');
  let sectionSideBar = document.querySelector('.sidebar');
  cartButton.addEventListener('click', modalPopup);
  closeButton.addEventListener('click', closeModal);
  sectionSideBar.addEventListener('click', sectionScroll);
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
