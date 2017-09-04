

// Elements
const nav = document.getElementById('nav');
const main = document.querySelector('main');

let scrollY = window.scrollY;
const navOffset = nav.offsetTop;



// FUNCTIONS
function getScrollY() {
  scrollY = window.scrollY;
}

function stickyNav() {
  if (scrollY >= navOffset) {
    nav.classList.add('sticky-nav');
    main.style.marginTop = `${nav.clientHeight}px`;
    main.classList.add('main-full');
  } else {
    nav.classList.remove('sticky-nav');
    main.style.marginTop = 0;
    main.classList.remove('main-full');
  }
}

// EVENT LISTENERS
window.addEventListener('scroll', getScrollY);
window.addEventListener('scroll', stickyNav);
