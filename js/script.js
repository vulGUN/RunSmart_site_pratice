// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 900,
//     adaptiveHeight: true,
//     prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left-arrow.svg"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right-arrow.svg"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   })
// })

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  autoHeight: true,
  speed: 900,
  slideBy: 'page',
  controls: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  responsive: {
    767: {
      nav: false,
    },
    0: {
      nav: true,
      navPosition: 'bottom',
      speed: 650,
    },
  },
})

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev')
})

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next')
})
