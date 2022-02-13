$(document).ready(function () {
  $("header").load("_header.html");

  let filmsSwiperCarousel = new Swiper(".films-swiper-carousel", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  let filmsSwiperItem = $(".films-swiper-item");

  $.each(filmsSwiperItem, (index, item) => {
    let bgThumb = $(item).attr("bg-thumb");

    $(item).css(
      "background-image",
      `linear-gradient(to top, #1e2129, transparent), url(assets/images/home/${bgThumb})`
    );
  });

  $(".latest-movies-carousel").owlCarousel({
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
