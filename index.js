
const nav = document.querySelector('.nav-wrapper');
const navTop = nav.offsetTop;
const toggleButton = document.querySelector('.resp-nav')

toggleButton.addEventListener('click', () => {
  if (toggleButton.style.animation) {
    toggleButton.style.animation = '';
  } else {
    toggleButton.style.animation = `navToggleAnimation 0.3s ease forwards`
  }
})

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    cover: true,
    rewind: true,
    perPage: 1,
    heightRatio: 0.5,
  }).mount();
});


const stickyScroll = () => {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('sticky');
  }
};

document.addEventListener('scroll', stickyScroll);
document.addEventListener('touchmove', stickyScroll);

const toggleAnimation = (links) => {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3
        }s`;
    }
  });
};



const navSlide = () => {
  const respNav = document.querySelector('.resp-nav');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav li');

  //Toggle Nav
  respNav.addEventListener('click', () => {
    mainNav.classList.toggle('nav-active');
    document.documentElement.classList.toggle('noScroll')
    toggleAnimation(navLinks);
    //Burger Animation
    respNav.classList.toggle('toggle');
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
