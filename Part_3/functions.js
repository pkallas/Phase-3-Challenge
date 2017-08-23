// Change modal and modal-overlay display to be flex
function modalPopup() {
  let modal = document.getElementById('modal');
  let modalOverlay = document.getElementById('modal-overlay');
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
};

// Have it set modal and modal-overlay display to be none
function closeModal() {
  let modal = document.getElementById('modal');
  let modalOverlay = document.getElementById('modal-overlay');
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
};


module.exports = {
  modalPopup: modalPopup,
  closeModal: closeModal
}
