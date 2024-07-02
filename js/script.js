// Nav scroll

function userScroll() {
  let hamburgerOpen = false;
  const navbar = document.querySelector('.navigation');
  const navbarCollapse = document.querySelector('#navbarCollapse');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.remove('navbar-sticky');
      navbar.classList.add('py-4');
    }

    if (window.scrollY <= 50 && hamburgerOpen) {
      navbar.classList.add('navbar-opaque');
    } else {
      navbar.classList.remove('navbar-opaque');
    }
  });

  navbarCollapse.addEventListener('show.bs.collapse', () => {
    hamburgerOpen = true;
    if (window.scrollY <= 50) {
      navbar.classList.add('navbar-opaque');
    }
  });

  navbarCollapse.addEventListener('hide.bs.collapse', () => {
    hamburgerOpen = false;
    if (window.scrollY <= 50) {
      navbar.classList.remove('navbar-opaque');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Video Modal

const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}

// Wow and Odometer

new WOW({
  callback: function (box) {
    var odometerElement = box.querySelector('.odometer');
    if (odometerElement) {
      var odometerValue = odometerElement.getAttribute('data-odometer-final');
      odometerElement.innerHTML = odometerValue;
    }
  },
}).init();

// Slick Carousel

$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});
