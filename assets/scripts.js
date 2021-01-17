import { gsap } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// HEADER BAR
ScrollTrigger.create({
  start: "top -80",
  end: 99999,
  toggleClass: {
    className: "main-tool-bar--scrolled",
    targets: ".main-tool-bar",
  },
})

// ANIMATE ELEMENTS BASED ON SCROLL IN AND OUT
function animateFrom(elem, direction) {
  direction = direction | 1

  var x = 0,
    y = direction * 100
  if (elem.classList.contains("gsReveal-from-left")) {
    x = -100
    y = 0
  } else if (elem.classList.contains("gsReveal-from-right")) {
    x = 100
    y = 0
  }
  if (elem.classList.contains("gsReveal-from-top")) {
    x = 0
    y = -100
  } else if (elem.classList.contains("gsReveal-from-bottom")) {
    x = 0
    y = 100
  }
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0, stagger: 0.5 },
    {
      duration: 1,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  )
}
function hide(elem) {
  gsap.set(elem, { autoAlpha: 0, stagger: 1 })
}
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger)

  gsap.utils.toArray(".gsReveal").forEach(function (elem) {
    hide(elem) // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem)
      },
      onEnterBack: function () {
        animateFrom(elem, -1)
      },
      // onLeave: function () {
      // hide(elem);
      // },
      // assure that the element is hidden when scrolled into view
    })
  })
})

// PARALLAX INTRO
// const tl = gsap.timeline({
// scrollTrigger: {
// trigger: "#hero",
// start: "top top",
// end: "bottom top",
// scrub: true,
// },
// });

// gsap.utils.toArray(".parallax").forEach((layer) => {
// const depth = layer.dataset.depth;
// const movement = -(layer.offsetHeight * depth);
// tl.to(layer, { y: movement, ease: "none" }, 0);
// });

//
