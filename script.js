
// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});



// pricing section
const setup = () => {
  return {
    isNavOpen: false,

    billPlan: "monthly",

    plans: [
      {
        name: "Easy",
        discretion:
          "All the basics for subjects that are just getting started.",
        price: {
          monthly: 29,
          annually: 29 * 12 - 199,
        },
        features: ["Online notes", "Educator support"],
      },
      {
        name: "Basic",
        discretion:
          "Better for growing knowledge for the desired subject.",
        price: {
          monthly: 59,
          annually: 59 * 12 - 100,
        },
        features: [
          "Online notes",
          "Educator support",
          "Exam categories",
          "Saved video lesson",
        ],
      },
      {
        name: "Custom",
        discretion:
          "Advanced features for pros who need more customization.",
        price: {
          monthly: 139,
          annually: 139 * 12 - 100,
        },
        features: [
          "Online notes",
          "Educator support",
          "Saved video lesson",
          "24*7 Chat support",
        ],
      },
    ],
  };
};


// go-to-top button
const btn = document.querySelector("#btn")
console.log(btn)

// btn.addEventListener("click", function () {
//     window.scrollTo(0, 0)
// })

btn.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 100,
  behavior: 'smooth',
  duration: 400,
  scrub: 2,
}));

var tl = gsap.timeline();
tl.from("#nav", {
  y: -500,
  opacity: 0,
  duration: 1.5,
  scrub: 1,
  stagger: 0.2,
})
tl.from("#section", {
  x: -2000,
  opacity: 0,
  scale: 100,
  duration: 1,
  scrub: 1,
})
