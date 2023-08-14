// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Contact me form, to start typing in eaach box 

  document.addEventListener("DOMContentLoaded", function() {
    // Function to set cursor position
    function setCursorPosition(elem, position) {
      if (elem.setSelectionRange) {
        elem.focus();
        elem.setSelectionRange(position, position);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", position);
        range.moveStart("character", position);
        range.select();
      }
    }

    // Attach click event listeners to input fields
    var inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach(function(field) {
      field.addEventListener("click", function() {
        setCursorPosition(this, this.placeholder.length);
      });
    });
  });
