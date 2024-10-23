// ----------- Section part
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section7 = document.querySelector("#section7");
const section8 = document.querySelector("#section8");
// ----------- Navbar part
const sticky = document.querySelectorAll(".sticky a");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const photo = document.querySelector(".photo");
const contact = document.querySelector(".contact");
const titlebar = document.querySelector("#titlebar");
const sectionTop = document.querySelector("#sectionTop");

// ----------- getBounding part
const info1 = section1.getBoundingClientRect();
const info2 = section2.getBoundingClientRect();
const info7 = section7.getBoundingClientRect();
const info8 = section8.getBoundingClientRect();
const info9 = section9.getBoundingClientRect();
// ----------- function part
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 6683) {
    sticky.forEach(function (e) {
      e.classList.remove("activebar");
    });
    contact.classList.add("activebar");
  } else if (this.window.scrollY > info7.top) {
    sticky.forEach(function (e) {
      e.classList.remove("activebar");
    });
    photo.classList.add("activebar");
  } else if (this.window.scrollY > info2.top) {
    sticky.forEach(function (e) {
      e.classList.remove("activebar");
    });
    about.classList.add("activebar");
  } else if (this.window.scrollY > info1.top) {
    sticky.forEach(function (e) {
      e.classList.remove("activebar");
    });

    home.classList.add("activebar");
  }
  if (window.innerWidth < 800) {
    titlebar.classList.add("hidden");
    sectionTop.classList.remove("hidden");
  } else {
    titlebar.classList.remove("hidden");
    sectionTop.classList.add("hidden");
  }
});
