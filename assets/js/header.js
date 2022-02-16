window.addEventListener("load", function () {
  let currentLocation = window.location.href;
  let menus = document.querySelectorAll(".nav-links>li");
  let menusLength = menus.length;

  for (let i = 0; i < menusLength; i++) {
    if (menus[i].children[0].href == currentLocation) {
      menus[i].children[0].classList.add("active");
    }
  }
});
