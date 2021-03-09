const scrolledNavbar = () => {
  const header = document.querySelector('header');
  if (header) {
    window.onscroll = () => {
      "use strict";
      if (document.body.scrollTop >= 130 || document.documentElement.scrollTop >= 130) {
        header.classList.add("scrolled-navbar");
      } else {
        header.classList.remove("scrolled-navbar");
      };
    };
  }
}

export { scrolledNavbar };