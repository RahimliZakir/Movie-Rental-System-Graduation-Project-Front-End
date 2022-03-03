$(document).ready(function () {
  $("header").load("_header.html");
  $("footer").load("_footer.html");

  let stars = $(".star-rating-div>i");

  $(stars).on("mouseenter", function () {
    $(this).removeClass("far").addClass("fas");
    $(this).prevAll("i").removeClass("far").addClass("fas");
  });

  let clickHandler = false;
  
  $(stars).on("mouseleave", function (e) {
    if (!clickHandler) {
      $(this).removeClass("fas").addClass("far");
      $(this).prevAll("i").removeClass("fas").addClass("far");
    } else {
      clickHandler = false;
    }
  });

  $(stars).click((e) => {
    $(this).removeClass("far").addClass("fas");
    $(this).prevAll("i").removeClass("far").addClass("fas");
    clickHandler = true;
  });
});
