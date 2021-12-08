const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");


// show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu')
    })
}

// hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}


const navLink = document.querySelectorAll(".nav_link")

const linkAction = () => {
    navMenu.classList.remove('show_menu')
}

navLink.forEach(n => n.addEventListener("click", linkAction))


// scroll header

const scrollAction = () => {
    const header = document.getElementById("header");

    if(this.scrollY >= 100) {
        header.classList.add("scroll-header")
    } else {
        header.classList.remove("scroll-header")
    }
}


window.addEventListener("scroll", scrollAction);

// SWIPPER JS ------------------------------------------------------

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 35,
    coverflowEffect: {
      rotate: 0,
    },
  });