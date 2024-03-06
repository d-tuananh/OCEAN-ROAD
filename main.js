const btnToggle = document.querySelector(".btn-toggle")
const btnCloseMenu = document.querySelector(
  ".menu__moblie ul i.fa-caret-square-left"
)
const bg_over_menu = document.querySelector(".bg-over-menu")
const menu_moblie = document.querySelector(".menu__moblie")

const arrBtnToggleMenuMoblie = [btnToggle, btnCloseMenu, bg_over_menu]
arrBtnToggleMenuMoblie.forEach((i) =>
  i.addEventListener("click", (e) => {
    e.preventDefault()
    menu_moblie.classList.toggle("-translate-x-full")
    bg_over_menu.classList.toggle("translate-x-full")
  })
)

var slide_auto_play = new Swiper(".slide-auto-play", {
  slidesPerView: 2,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 2000,
  breakpoints: {
    450: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
  },
})

var logo_brand_auto_play = new Swiper(".logo-brand-auto-play", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  speed: 1500,
  breakpoints: {
    450: {
      slidesPerView: 4,
    },
    1068: {
      slidesPerView: 5,
    },
    1524: {
      slidesPerView: 7,
    },
  },
})

var logo_brand_auto_play_reverse = new Swiper(".logo-brand-auto-play-reverse", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  speed: 1500,
  breakpoints: {
    450: {
      slidesPerView: 4,
    },
    1068: {
      slidesPerView: 5,
    },
    1524: {
      slidesPerView: 7,
    },
  },
})
