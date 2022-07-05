"use strict";

const modalWindow = document.querySelector(".modal-window-wrapper");
const modalClose = document.querySelector(".modal-window-close");

const showModalWindow = () => {
  if (modalWindow.classList.contains("hidden")) {
    modalWindow.classList.remove("hidden");
  }
};

const closeModalWindow = () => {
  modalWindow.classList.add("hidden");
};

// show modal window when element with .show-modal
// class has been clicked
document
  .querySelectorAll(".show-modal")
  .forEach((trigger) => trigger.addEventListener("click", showModalWindow));

// close modal window:

// when clicked on overlay (modal background)
modalWindow.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window-wrapper")) {
    closeModalWindow();
  }
});

// when clicked on close button (x)
modalClose.addEventListener("click", closeModalWindow);

// when ESC key was pressed
document.body.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "escape") {
    closeModalWindow();
  }
});
