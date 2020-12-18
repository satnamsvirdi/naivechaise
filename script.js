const bagBtn = document.querySelector('#bag');
const body = document.querySelector('body');
const closeBag = document.querySelector('#close-bag');
const aside = document.querySelector('aside');
const personDropdown = document.querySelector('#person-dropdown');
const personDropdownBtn = document.querySelector('#person-dropdown-btn');
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenuDropdown = document.querySelector('#mobile-menu-dropdown');

const toggleBag = (e) => {
  e.preventDefault()
  aside.classList.toggle("hidden")
  body.classList.toggle("hide")
}

bagBtn.addEventListener('click', toggleBag)
closeBag.addEventListener('click', toggleBag)

const toggleDropdown = (e) => {
  e.preventDefault();
  personDropdown.classList.toggle("hidden")
}
personDropdownBtn.addEventListener('click', toggleDropdown)

const toggleMobileDropdown = (e) => {
  e.preventDefault();
  mobileMenuDropdown.classList.toggle("hidden")
}

mobileMenuBtn.addEventListener('click', toggleMobileDropdown)