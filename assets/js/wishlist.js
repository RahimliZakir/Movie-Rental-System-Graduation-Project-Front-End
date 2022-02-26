$(document).ready(function () {
  $("header").load("_header.html");
  $("footer").load("_footer.html");

  let wishlistFilterMoviesBtn = $(".wishlist-filter-movies-btn");
  let wishlistFilterShowsBtn = $(".wishlist-filter-shows-btn");
  let wishlistMoviesRow = $(".wishlist-movies-row");
  let wishlistShowsRow = $(".wishlist-shows-row");

  if ($(wishlistFilterMoviesBtn).hasClass("selected")) {
    $(wishlistShowsRow).removeClass("visible");
    $(wishlistMoviesRow).addClass("visible");
  } else {
    $(wishlistMoviesRow).removeClass("visible");
    $(wishlistShowsRow).addClass("visible");
  }

  let wishlistMoviesCards = $(wishlistMoviesRow).children();
  let wishlistShowsCards = $(wishlistShowsRow).children();

  $(wishlistFilterMoviesBtn).on("click", (e) => {
    $(wishlistShowsRow).removeClass("visible");
    $(wishlistMoviesRow).addClass("visible");

    $(e.currentTarget).siblings().removeClass("selected");
    $(e.currentTarget).addClass("selected");
  });

  $(wishlistFilterShowsBtn).on("click", (e) => {
    $(wishlistMoviesRow).removeClass("visible");
    $(wishlistShowsRow).addClass("visible");

    $(e.currentTarget).siblings().removeClass("selected");
    $(e.currentTarget).addClass("selected");
  });
});
