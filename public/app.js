const toggleDarkLight = () => {
  const body = document.getElementById("body");
  const currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
};

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links. Need the index to fade slowly
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    }); // end burger listener
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
