$(function () {
  $("header").load("_header.html");
  $("footer").load("_footer.html");

  let contactFormCols = $("#contact-side-form>[class*='col']");
  let contactFormLabels = $(contactFormCols).find("label");

  $.each(contactFormLabels, (index, item) => {
    let formElement = $(item).next();
    let requiredPlaceholder = $(item).next().attr("placeholder");

    if (
      $(item).hasClass("label-required") &&
      $(requiredPlaceholder) != undefined
    ) {
      $(formElement).attr("placeholder", `${requiredPlaceholder}*`);
    }
  });
});
