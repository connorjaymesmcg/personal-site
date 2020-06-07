let nav = document.querySelector('nav');
let navTop = nav.offsetTop;
function stickyScroll() {
  if (window.scrollY >= navTop) {
    // document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('sticky');
  }
}
window.addEventListener('scroll', stickyScroll);

const toggleAnimation = (links) => {
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.3s ease forwards ${
        index / 7 + 0.3
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
    console.log('responsive nav is active');
    toggleAnimation(navLinks);
    //Burger Animation
    respNav.classList.toggle('toggle');
    console.log('clicked burger');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      console.log('link clicked:', link);
      mainNav.classList.toggle('nav-active');
      toggleAnimation(navLinks);
      console.log('navigation link has been clicked');
      respNav.classList.toggle('toggle');
    });
  });
};

navSlide();
