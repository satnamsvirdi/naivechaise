const bagBtn = document.querySelector('#bag');
const body = document.querySelector('body');
const closeBag = document.querySelector('#close-bag');
const aside = document.querySelector('aside');
const personDropdown = document.querySelector('#person-dropdown');
const personDropdownBtn = document.querySelector('#person-dropdown-btn');

const toggleBag = (e) => {
  e.preventDefault()
  aside.classList.toggle("hidden")
  body.classList.toggle("hide")
}

bagBtn.addEventListener('click', toggleBag)
closeBag.addEventListener('click', toggleBag)

const toggleDropdown = (e) => {
  e.preventDefault();
  
}

personDropdownBtn.addEventListener('click', toggleDropdown())