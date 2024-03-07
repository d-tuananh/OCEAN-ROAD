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

var silde_danh_gia = new Swiper(".silde-danh-gia", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

var slide_thong_tin_huu_ich = new Swiper(".slide-thong-tin-huu-ich", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
})

var slide_cong_thuc_tu_sua = new Swiper(".slide-cong-thuc-tu-sua", {
  navigation: {
    nextEl: ".button-next-slide",
    prevEl: ".button-prev-slide",
  },
  spaceBetween: 30,
})

var swiper = new Swiper(".image-slide", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
})
var swiper2 = new Swiper(".image-preview", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
})

// Toggle modal image
const btnModalClose = document.querySelector(".close-modal-image")
const modalImage = document.querySelector(".modal-image-chi-tiet-sp")
const btnModalOpen = document.querySelectorAll(".open-modal-image")
const imageModal = document.querySelector(".modal-image-chi-tiet-sp img")
console.log(btnModalClose, modalImage, btnModalClose, imageModal)
function onModalImage(url) {
  imageModal.src = url
}
const btnModal = [btnModalClose, ...btnModalOpen]
btnModal.forEach((ben) => {
  ben.addEventListener("click", (e) => {
    e.preventDefault()
    modalImage.classList.toggle("scale-0")
  })
})
