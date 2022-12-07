var headerbg = document.getElementById("home");
window.addEventListener("scroll", function () {
  headerbg.style.opacity = 1 - +window.pageYOffset / 550 + "";
  headerbg.style.backgroundPositionY = -+window.pageYOffset / 2 + "px";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});