const burgerMenu = document.querySelector('.fa-bars')
const nav = document.querySelector('.nav__list')
const navLink = document.querySelectorAll('.nav__link')

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active')
  burgerMenu.classList.toggle('fa-times')
})

// Close Menu
navLink.forEach(link=>{
  link.addEventListener('click',()=>{
    nav.classList.remove('active')
    burgerMenu.classList.remove('fa-times')
  })
})
// Home slider
var swiper = new Swiper(".home__slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Food slider
var swiper = new Swiper(".food__slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Food / preview
const foodCard = document.querySelectorAll('.food .card')
const previewContainer = document.querySelector('.preview__container')
const previewCard = document.querySelectorAll('.preview .card')
const closeIcon = document.querySelector('.preview .preview__closeIcon')

foodCard.forEach(food => {
  food.addEventListener('click', () => {
    previewContainer.classList.add('preview__container--active');
    let name = food.getAttribute('data-name');
    previewCard.forEach(preview => {
      let target = preview.getAttribute('data-target')
      if (name == target) {
        preview.classList.add('active')
      }
    })
  })
})

closeIcon.addEventListener('click', () => {
  previewContainer.classList.remove('preview__container--active');
  previewCard.forEach(preview => {
    preview.classList.remove('active')
  })
})

window.addEventListener('click', (e) => {
  if (e.target == previewContainer) {
    previewContainer.classList.remove('preview__container--active');
    previewCard.forEach(preview => {
      preview.classList.remove('active')
    })
  }
})