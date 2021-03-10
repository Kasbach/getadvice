const menuItems = document.querySelectorAll('a');

function activeMenu() {
  window.onscroll = () => {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      menuItems[1].classList.add('active');
    } else {
      menuItems[1].classList.remove('active');
    }

    if (document.body.scrollTop >= 650 || document.documentElement.scrollTop >= 650) {
      menuItems[2].classList.add('active');
      menuItems[1].classList.remove('active');
    } else {
      menuItems[2].classList.remove('active');
    }

    if (document.body.scrollTop >= 3630 || document.documentElement.scrollTop >= 3630) {
      menuItems[3].classList.add('active');
      menuItems[2].classList.remove('active');
    } else {
      menuItems[3].classList.remove('active');
    }
  };
}

export { activeMenu };