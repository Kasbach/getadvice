const header = document.querySelector('header');

const scrolledNavbar = () => {
  if (header) {
    window.onscroll = () => {
      "use strict";
      if (document.body.scrollTop >= 130 || document.documentElement.scrollTop >= 130) {
        activeMenu();
        header.classList.add("scrolled-navbar");
      } else {
        header.classList.remove("scrolled-navbar");
      };
    };
  }
}

import { activeMenu } from '../components/activeMenu';

export { scrolledNavbar };
