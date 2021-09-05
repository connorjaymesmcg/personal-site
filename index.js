const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const navLink = document.querySelectorAll('.nav-link');
const rotator = document.getElementById('rotator');

hamburger.addEventListener('click', mobileMenu);
// window.addEventListener('click', cycleWords);
navLink.forEach((link) => link.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

const wordList = ['a web developer', 'a guitarist', 'a music nerd', 'an outdoor enthusiast', 'a hypochondriac', 'a breakfast food wizard', 'a bad chess player'];

function cycleWords() {
  let randomItem = wordList[Math.floor(Math.random() * wordList.length)];
  let timer = setInterval(() => {
    rotator.innerHTML = randomItem;
    console.log(timer);
    cycleWords();
  }, 1000);
}
