const header = document.querySelector('header');
const navTop = document.querySelector('.nav-wrapper');
const navHeight = navTop.getBoundingClientRect().height;
const navActive = document.querySelector('.nav-active');
const mainNav = document.querySelector('.main-nav');
const burger = document.querySelector('.resp-nav')

console.log(navHeight);

// const stickyNav = function (entries) {
//   const [entry] = entries // desctruct first element of entires array in order to access entries of intersectionObserverAPI
//   if (!entry.isIntersecting) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// }

const toggleButton = document.querySelector('.resp-nav');

// document.addEventListener('scroll', stickyScroll);
// document.addEventListener('touchmove', stickyScroll);

const toggleAnimation = (links) => {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.4}s`;
    }
  });
};

window.addEventListener('load', () => {
  console.log('page loaded');
  // mainNav.style.display = 'flex';
  burger.style.display = 'block'
});

const navSlide = () => {
  const respNav = document.querySelector('.resp-nav');
  const navLinks = document.querySelectorAll('.main-nav li');
  //Toggle Nav
  respNav.addEventListener('click', () => {
    if (!mainNav.classList.contains('nav-active')) {
      mainNav.style.display = 'flex';
      mainNav.classList.toggle('nav-active');
      document.documentElement.classList.toggle('noScroll');
      toggleAnimation(navLinks);
      //Burger Animation
      respNav.classList.toggle('toggle');
    } else {
      mainNav.classList.toggle('nav-active');
      document.documentElement.classList.toggle('noScroll');
      respNav.classList.toggle('toggle');
      toggleAnimation(navLinks);
      // mainNav.style.display = 'flex';
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.toggle('nav-active');
      toggleAnimation(navLinks);
      respNav.classList.toggle('toggle');
    });
  });
};

navSlide();
