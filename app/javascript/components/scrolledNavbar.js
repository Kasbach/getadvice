const scrolledNavbar = () => {
  var header = document.querySelector('header');
  if (header) {
    window.onscroll = function () {
      "use strict";
      if (document.body.scrollTop >= 130 || document.documentElement.scrollTop >= 130 ) {
        header.classList.add("scrolled-navbar");
      } else {
        header.classList.remove("scrolled-navbar");
      };
    };
  }
}

export { scrolledNavbar };