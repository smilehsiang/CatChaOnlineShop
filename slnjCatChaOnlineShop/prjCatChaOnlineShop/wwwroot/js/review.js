$(document).ready(function() {
  // Bootstrap Star Rating
  $('.kv-ltr-theme-fas-star').rating({
    hoverOnClear: false,
    theme: 'krajee-fas',
    containerClass: 'is-star',
    disabled: true
  });

  // Slick Slider
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
