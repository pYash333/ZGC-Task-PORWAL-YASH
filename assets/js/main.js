$(document).ready(function () {
  // Hero banner carousel
  $(".heroBanner-carosuel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      "<img src='assets/images/arrow-white-left.png' />",
      "<img src='assets/images/arrow-white-right.png' />",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Popular brand carousel
  $(".popularBrand-carosuel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    dots: false,
    navText: [
      "<img src='assets/images/rounded-left-arrow.png' />",
      "<img src='assets/images/rounded-right-arrow.png' />",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
