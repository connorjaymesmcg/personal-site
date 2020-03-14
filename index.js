console.log('working')
let nav = document.querySelector('.nav-wrapper');
let navTop = nav.offsetTop;

function stickyScroll() {
  console.log(`navtop = ${navTop}`);
  console.log(`scrollY = ${window.scrollY}`);
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('sticky')
  }
}

window.addEventListener('scroll', stickyScroll)
