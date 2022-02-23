$(function () {
  $("header").load("_header.html");
  $("footer").load("_footer.html");

  let contactFormCols = $("#contact-side-form>[class*='col']");
  let contactFormLabels = $(contactFormCols).find("label");
  let contactFormElements = $(contactFormCols).find("input,textarea,select");
  let contactBtn = $(".button-col>button");

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

  let firstnameInput = $("#firstname-input");
  $(firstnameInput).on("blur", function () {
    if ($(firstnameInput).val() == "") {
      $(firstnameInput).next(".error-text").addClass("error-active");
    }
  });
  $(firstnameInput).on("keyup", function () {
    if ($(firstnameInput).val() == "") {
      $(firstnameInput).next(".error-text").addClass("error-active");
    } else {
      $(firstnameInput).next(".error-text").removeClass("error-active");
    }
  });

  let lastnameInput = $("#lastname-input");
  $(lastnameInput).on("blur", function () {
    if ($(lastnameInput).val() == "") {
      $(lastnameInput).next(".error-text").addClass("error-active");
    }
  });
  $(lastnameInput).on("keyup", function () {
    if ($(lastnameInput).val() == "") {
      $(lastnameInput).next(".error-text").addClass("error-active");
    } else {
      $(lastnameInput).next(".error-text").removeClass("error-active");
    }
  });

  let pattern = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  );

  let emailInput = $("#email-input");
  $(emailInput).on("blur", function () {
    if ($(emailInput).val() == "") {
      $(emailInput).next(".error-text").addClass("error-active");
    }
  });
  $(emailInput).on("keyup", function (e) {
    if ($(emailInput).val() == "") {
      $(emailInput).next(".error-text").addClass("error-active");
    } else {
      if (pattern.test($(emailInput).val())) {
        $(emailInput).next(".error-text").removeClass("error-active");
      } else {
        $(emailInput).next(".error-text").addClass("error-active");
      }
    }
  });

  let needSelect = $("#need-select");
  $(needSelect).on("blur", function () {
    if ($(needSelect).val() == "") {
      $(needSelect).next(".error-text").addClass("error-active");
    }
  });
  $(needSelect).on("change", function () {
    if ($(needSelect).val() == "") {
      $(needSelect).next(".error-text").addClass("error-active");
    } else {
      $(needSelect).next(".error-text").removeClass("error-active");
    }
  });

  let messsageTextarea = $("#message-textarea");
  $(messsageTextarea).on("blur", function () {
    if ($(messsageTextarea).val() == "") {
      $(messsageTextarea).next(".error-text").addClass("error-active");
    }
  });
  $(messsageTextarea).on("keyup", function () {
    if ($(messsageTextarea).val() == "") {
      $(messsageTextarea).next(".error-text").addClass("error-active");
    } else {
      $(messsageTextarea).next(".error-text").removeClass("error-active");
    }
  });

  $(document.body).on("keyup", function () {
    $.each(contactFormElements, (index, item) => {
      if ($(item).next(".error-text").hasClass("error-active")) {
        $(contactBtn).addClass("disable");
      } else {
        $(contactBtn).removeClass("disable");
      }
    });
  });
});
