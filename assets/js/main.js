const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// show menu ---------------------------------------
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

// hide menu ---------------------------------------
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  navMenu.classList.remove("show_menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// scroll header ---------------------------------------

const scrollAction = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollAction);

// swiper js ---------------------------------------

var swiper = new Swiper(".discover_container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
  },
});

// video ---------------------------------------

const videoFile = document.getElementById("video-file"),
  videoIcon = document.getElementById("video-icon"),
  videoButton = document.getElementById("video-button");

const playPause = () => {
  if (videoFile.paused) {
    // play
    videoFile.play();
    // change icon
    videoIcon.classList.add("ri-pause-circle-fill");
    videoIcon.classList.remove("ri-play-circle-line");
  } else {
    // pause
    videoFile.pause();
    // change icon
    videoIcon.classList.remove("ri-pause-circle-fill");
    videoIcon.classList.add("ri-play-circle-line");
  }
};

const videoEnd = () => {
  videoIcon.classList.remove("ri-pause-circle-fill");
  videoIcon.classList.add("ri-play-circle-line");
};

videoButton.addEventListener("click", playPause);
videoFile.addEventListener("ended", videoEnd);

// show scroll up ---------------------------------------

const scrollTop = () => {
  const scrollButton = document.getElementById("scroll-up");

  if (this.scrollY >= 560) {
    scrollButton.classList.add("show_scroll");
  } else {
    scrollButton.classList.remove("show_scroll");
  }
};

window.addEventListener("scroll", scrollTop);

// scroll sections - active link ------------------------

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

//  DARK LIGHT THEME -------------------------------
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// scroll reveal -------------------------------

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  // reset: true,
});

sr.reveal(`.home_data, .home_social-link, .discover_container, .place_card`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.about_img, .experience_img`, {
  origin: "right",
  interval: 100,
});

sr.reveal(`.about_data, .video_content`, {
  origin: "left",
  interval: 100,
});
