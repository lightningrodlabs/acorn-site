const scrollToSection = (event: {
  preventDefault: () => void;
  target: { href: string | URL };
}) => {
  // event.persist()

  // only do this behaviour if already on the homepage
  if (window.location.pathname === "/") {
    event.preventDefault();
    let url
    if (event.target.href) {
      url = new URL(event.target.href);
    } else {
      url = new URL(window.location.protocol + '//' + window.location.host + event.target.dataset.href)
    }
    const id = url.hash;
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export { scrollToSection };

const scrollToHome = (event: { preventDefault: () => void }) => {
  if (window.location.pathname === "/") {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export { scrollToHome };
