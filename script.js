const bagBtn = document.querySelector('#bag');
const body = document.querySelector('body');
const closeBag = document.querySelector('#close-bag');
const aside = document.querySelector('aside');
const personDropdown = document.querySelector('#person-dropdown');
const personDropdownBtn = document.querySelector('#person-dropdown-btn');
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenuDropdown = document.querySelector('#mobile-menu-dropdown');
const incrementBtn = document.querySelector('.btn-incr');
const decrementBtn = document.querySelector('.btn-decr');
const quantity = document.querySelector('#quantity');

// toggles for bag, dropdown and mobile dropdown
const toggleBag = (e) => {
  e.preventDefault()
  aside.classList.toggle("hidden")
  body.classList.toggle("hide")
}
const toggleDropdown = (e) => {
  e.preventDefault();
  personDropdown.classList.toggle("hidden")
}
const toggleMobileDropdown = (e) => {
  e.preventDefault();
  mobileMenuDropdown.classList.toggle("hidden")
}

const toggler = (e) => {
  e.preventDefault();
  let element = e.target

  if (element === aside) {
    alert("aside aside aside!!!");
  }

  element.classList.toggle("hidden")
}

/*
* this function sets the quantity of items in the cart 
* and it uses target elements using their IDs.
* but it has some caveats when using svg inside buttons.
* For meantime, prefer using another setQuantity function
* using classes to target elements.
*
const setQuantity = (e) => {
  let btnId = e.target.id;

  if (btnId) {
    if (btnId === "btn-incr") {
      return quantity.value++
    } else if (btnId === "btn-decr") {
      if (quantity.value <= 1) {
        return;
      }
      return quantity.value--
    } else {
      alert("My bad!")
    }
  }
}
*/

// setting quantity of orders in a generic function
const setQuantity = e => {
  if (e.target.classList.contains("btn-incr")) {
    return quantity.value++
  } else if (e.target.classList.contains("btn-decr")) {
    if (quantity.value <= 1) {
      return;
    }
    return quantity.value--
  } else {
    console.log("You pressed something mysterious! :P")
  }
};

bagBtn.addEventListener('click', toggleBag)
closeBag.addEventListener('click', toggleBag)
personDropdownBtn.addEventListener('click', toggleDropdown)
mobileMenuBtn.addEventListener('click', toggleMobileDropdown)
incrementBtn.addEventListener('click', setQuantity)
decrementBtn.addEventListener('click', setQuantity)