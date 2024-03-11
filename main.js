const popup = document.querySelector(".popup")
const btnClosePopup = document.querySelectorAll(".btn-close-popup")

const allBtnClosePopup = [...btnClosePopup]

if (popup) {
  function openPopup() {
    setTimeout(() => {
      popup.classList.remove("hidden")
      popup.classList.add("flex")
      document.body.style.overflow = "hidden"
    }, 1000)
  }

  openPopup()

  allBtnClosePopup.forEach((i) =>
    i.addEventListener("click", (e) => {
      e.preventDefault()
      popup.classList.remove("flex")
      popup.classList.add("hidden")
      document.body.style.overflow = "auto"
    })
  )
}

const btnToggle = document.querySelector(".btn-toggle")
const btnCloseMenu = document.querySelector(".menu__moblie ul i.fa-times")
const bg_over_menu = document.querySelector(".bg-over-menu")
const menu_moblie = document.querySelector(".menu__moblie")

const arrBtnToggleMenuMoblie = [btnToggle, btnCloseMenu, bg_over_menu]
arrBtnToggleMenuMoblie.forEach((i) =>
  i.addEventListener("click", (e) => {
    e.preventDefault()
    menu_moblie.classList.toggle("-translate-x-full")
    bg_over_menu.classList.toggle("hidden")
  })
)

if (document.querySelector(".banner-slide")) {
  var banner_slide = new Swiper(".banner-slide", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none"><path d="M0.117907 10.377C-0.520707 6.22598 1.55953 4.13536 3.3574 3.29124C4.13967 2.92396 4.92411 2.52159 5.56185 1.93838C7.58356 0.0895368 9.92895 -1.03443 10.6179 1.37695C11.6179 4.87695 1.11791 16.877 0.117907 10.377Z" fill="#2B5E8A"/></svg>' +
          "</span>"
        )
      },
    },
  })
}

if (document.querySelector(".slide-auto-play")) {
  var slide_auto_play = new Swiper(".slide-auto-play", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2500,
    allowTouchMove: false,
  })
}

if (document.querySelector(".logo-brand-auto-play")) {
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
    allowTouchMove: false,
  })
}

if (document.querySelector(".logo-brand-auto-play-reverse")) {
  var logo_brand_auto_play_reverse = new Swiper(
    ".logo-brand-auto-play-reverse",
    {
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
    }
  )
}

if (document.querySelector(".silde-danh-gia")) {
  var silde_danh_gia = new Swiper(".silde-danh-gia", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none"><path d="M0.117907 10.377C-0.520707 6.22598 1.55953 4.13536 3.3574 3.29124C4.13967 2.92396 4.92411 2.52159 5.56185 1.93838C7.58356 0.0895368 9.92895 -1.03443 10.6179 1.37695C11.6179 4.87695 1.11791 16.877 0.117907 10.377Z" fill="#2B5E8A"/></svg>' +
          "</span>"
        )
      },
    },
  })
}

if (document.querySelector(".slide-thong-tin-huu-ich")) {
  var slide_thong_tin_huu_ich = new Swiper(".slide-thong-tin-huu-ich", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none"><path d="M0.117907 10.377C-0.520707 6.22598 1.55953 4.13536 3.3574 3.29124C4.13967 2.92396 4.92411 2.52159 5.56185 1.93838C7.58356 0.0895368 9.92895 -1.03443 10.6179 1.37695C11.6179 4.87695 1.11791 16.877 0.117907 10.377Z" fill="#2B5E8A"/></svg>' +
          "</span>"
        )
      },
    },
    slidesPerView: 1,
    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  })
}

if (document.querySelector(".slide-cong-thuc-tu-sua")) {
  var slide_cong_thuc_tu_sua = new Swiper(".slide-cong-thuc-tu-sua", {
    navigation: {
      nextEl: ".button-next-slide",
      prevEl: ".button-prev-slide",
    },
    spaceBetween: 30,
  })
}

if (document.querySelector(".image-slide")) {
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
}

// Toggle modal image
const btnModalClose = document.querySelector(".close-modal-image")
const modalImage = document.querySelector(".modal-image-chi-tiet-sp")
const btnModalOpen = document.querySelectorAll(".open-modal-image")
const imageModal = document.querySelector(".modal-image-chi-tiet-sp img")

if (modalImage) {
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
}
