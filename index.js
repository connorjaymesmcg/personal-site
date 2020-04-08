console.log("working");
let nav = document.querySelector("nav");
let navTop = nav.offsetTop;

function stickyScroll() {
  console.log(`navtop = ${navTop}`);
  console.log(`scrollY = ${window.scrollY}`);
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("sticky");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyScroll);

const navSlide = () => {
  const respNav = document.querySelector(".resp-nav");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav li");

  //Toggle Nav
  respNav.addEventListener("click", () => {
    mainNav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
      link.addEventListener('click', () => {
        mainNav.classList.toggle('nav-active');
      });
    });
    //Burger Animation
    respNav.classList.toggle("toggle");
    console.log("clicked burger");
  });
};

navSlide();
