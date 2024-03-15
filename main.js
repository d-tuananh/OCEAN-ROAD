function StartJS() {
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

  window.onscroll = function () {
    myFunctionSticky()
    myFunctionMoblieSticky()
  }

  var navbar = document.querySelector(".sticky-navbar")
  var sticky = navbar.offsetTop

  function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky")
    }
  }

  var navbarMoblie = document.querySelector(".sticky-navbar-moblie")
  var stickyMoblie = navbarMoblie.offsetTop

  function myFunctionMoblieSticky() {
    if (window.pageYOffset >= stickyMoblie) {
      navbarMoblie.classList.add("sticky")
    } else {
      navbarMoblie.classList.remove("sticky")
    }
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
      spaceBetween: 30,
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
    // var slideAutoPlayElement = document.querySelector(".slide-auto-play")
    // var slidesWrapper = slideAutoPlayElement.querySelector(".swiper-wrapper")

    // for (var i = 0; i < 7; i++) {
    //   var existingSlidesCount =
    //     slidesWrapper.querySelectorAll(".swiper-slide").length
    //   if (existingSlidesCount >= 7) {
    //     break
    //   }
    //   slidesWrapper.innerHTML +=
    //     slidesWrapper.querySelectorAll(".swiper-slide")[
    //       Math.floor(Math.random() * existingSlidesCount)
    //     ].outerHTML
    // }

    // Khởi tạo Swiper
    var slideAutoPlaySwiper = new Swiper(".slide-auto-play", {
      slidesPerView: 5.5,
      spaceBetween: 30,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1500,
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
        allowTouchMove: false,
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
      spaceBetween: 30,
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

  const btn_content_chi_tiet_sp = document.querySelector(
    ".btn-content-chi-tiet-sp"
  )
  const content_chi_tiet_sp = document.querySelector(".content-chi-tiet-sp")
  const danh_muc_sp = [
    "giới thiệu",
    "thành phần",
    "hướng dẫn sử dụng",
    "hướng dẫn bảo quản",
    "feedback của người dùng",
  ]

  if (btn_content_chi_tiet_sp && content_chi_tiet_sp) {
    danh_muc_sp.forEach((item, index) => {
      const buttonHTML = `
    <button title="${item}" onclick="addContentChiTietSp(${index})" ${
        index === 0 ? 'class="danh-muc-sp-active"' : ""
      }>${item}</button>
  `
      btn_content_chi_tiet_sp.innerHTML += buttonHTML
    })

    function addContentChiTietSp(index) {
      btn_content_chi_tiet_sp.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("danh-muc-sp-active")
      })
      btn_content_chi_tiet_sp
        .querySelectorAll("button")
        [index].classList.add("danh-muc-sp-active")
      content_chi_tiet_sp.innerHTML = `
        <div role="status" class='mx-auto w-fit'>
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>`
      setTimeout(() => {
        if (danh_muc_sp[index] === danh_muc_sp[2]) {
          return (content_chi_tiet_sp.innerHTML = `
    <iframe
                src="https://www.youtube.com/embed/nJvSOp6OkPM?si=7U8F_AojJeatVQ1o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="w-full sm:w-2/3 lg:w-1/2 aspect-video mx-auto rounded-xl"
              ></iframe>
              <p
                class="text-[12px] sm:text-[16px] text-ct-blue font-medium indent-4"
              >
                Công thức từ sữa tươi mang đến những cách sáng tạo để tận dụng
                sữa tươi ngon và biến nó thành những món ăn ngon miệng. Từ món
                tráng miệng ngọt ngào cho đến các món ăn sáng bổ dưỡng, sữa tươi
                là nguyên liệu đa năng và dinh dưỡng giàu dinh dưỡng. Trong bài
                viết này, chúng tôi sẽ khám phá những công thức từ sữa thơm độc
                và hấp dẫn mà bạn có thể thực hiện tại nhà.
              </p>
              <div class="flex flex-col text-[12px] sm:text-[16px]">
                <span class="font-bold text-ct-blue"
                  >1 . Công thức món tráng miệng:</span
                >
                <span>
                  Công thức từ sữa tươi cho món tráng miệng làm nổi bật hương vị
                  ngon của sữa và tạo ra những món ăn ngon miệng. Đó có thể là
                  kem sữa tươi mát lạnh vào mùa hè, bánh sữa tươi mềm, panna
                  cotta sữa tươi thơm ngon hoặc sữa chua sữa đáng yêu. Bài viết
                  sẽ chia sẻ các công thức chi tiết kèm theo hướng dẫn để bạn có
                  thể nấu các món tráng miệng thơm ngon và hấp dẫn từ sữa
                  tươi.</span
                >
              </div>

              <div class="flex flex-col text-[12px] sm:text-[16px]">
                <span class="font-bold text-ct-blue"
                  >2 . Công thức món ăn sáng:</span
                >
                <span
                  >Sữa tươi cũng là nguyên liệu tuyệt vời để tạo ra những món ăn
                  sáng đầy dinh dưỡng. Bạn có thể thưởng thức một ly sữa tươi
                  tươi ngon, hoặc tạo ra các loại sinh tố, sữa chua, bánh mỳ sữa
                  tươi hay bánh pancake sữa tươi ngon là nh. Bài viết sẽ cung
                  cấp cho bạn các công thức đơn giản và ngon để bắt đầu ngày mới
                  với một bữa sáng bổ sung dưỡng chất từ ​​sữa tươi tươi.
                </span>
              </div>
              <div class="flex flex-col text-[12px] sm:text-[16px]">
                <span class="font-bold text-ct-blue"
                  >3 . Công thức món ăn khác:</span
                >
                <span>
                  Ngoài món tráng miệng và món ăn sáng, công thức từ sữa tươi
                  còn đa dạng và phong phú cho nhiều món ăn khác. Đó có thể là
                  sữa chua sữa tươi trong các món salad của tôi, sữa tươi làm đồ
                  uống giải khát, hay sữa tươi sử dụng trong các món tráng miệng
                  truyền thống nh ư bánh flan, pudding hay chuối hấp. Bài viết
                  sẽ giới thiệu các công thức độc đáo và sáng tạo để bạn có thể
                  khám phá và thử nghiệm tại nhà.</span
                >
              </div>
        `)
        }
        content_chi_tiet_sp.innerHTML = `<div class="content-chi-tiet-sp-item">
  <p class='uppercase text-[20px] sm:text-[34px] text-center font-bold'>${danh_muc_sp[index]}</p>
  <li class='list-decimal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam quod, eaque tenetur consequatur doloremque.</li>
  <li class='list-decimal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse deleniti est sapiente harum repellat!</li>
  <li class='list-decimal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit quia neque facilis rem quo labore officia? Ullam quia nesciunt modi sequi a quisquam assumenda odit officia nobis quod voluptatibus, repudiandae quidem repellat fugiat dolorum, totam molestiae, quibusdam adipisci quos eaque natus voluptas. Magni, pariatur beatae vero unde laudantium ab.</li>
          `
      }, 1500)
    }

    addContentChiTietSp(2)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  StartJS()
})
