/* Cursor */
const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" })

})

/* Arrow up */
let span = document.querySelector(".up");

window.onscroll = function () {
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

/*  Side Bar Active  */
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/* Dark / light Mode */
const body = document.querySelector("body");
const toggled = document.querySelector("#toggled");
const sunIcon = document.querySelector(".toggled .bxs-sun");
const moonIcon = document.querySelector(".toggled .bx-moon");

toggled.addEventListener("change", () => {
  body.classList.toggle("light");
  sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});

// /* Transtion */
// let sectionSki = document.querySelector(".tran");
// let spanTranso = document.querySelectorAll(".skills__precentage");

// window.onscroll = function () {
//   if (window.scrollY >= sectionSki.offsetTop + 60) {
//     spanTranso.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
// };

/*Work Popup*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    toggleportfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function toggleportfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", toggleportfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/* Services Modal */
const modalViews = document.querySelectorAll(".services__modal"),
  modelBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*  Swiper  */
let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  Loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/* Skills Tabs */
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

/*Mixitup*/
let mixerportfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link Active Work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach(L => L.classList.remove("active-work"))
  this.classList.add("active-work");
}

linkWork.forEach(L => L.addEventListener("click", activeWork));


