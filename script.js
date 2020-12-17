const bagBtn = document.querySelector('#bag');
const closeBag = document.querySelector('#close-bag');
const aside = document.querySelector('aside');

const toggleBag = (e) => {
  e.preventDefault()
  aside.classList.toggle("hidden")
}

bagBtn.addEventListener('click', toggleBag)
closeBag.addEventListener('click', toggleBag)