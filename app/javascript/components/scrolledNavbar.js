const scrolledNavbar = () => {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.add('scrolled-navbar');
    })
  }
}

export { scrolledNavbar };