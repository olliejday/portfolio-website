import { gsap, Power1 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const fadeInLeft = (el) => (
  gsap.fromTo(el, {
    autoAlpha: 0.5,
    x: 100
  }, {
    autoAlpha: 1,
    x: 0,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "center center",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const fadeInRight = (el) => (
  gsap.fromTo(el, {
    autoAlpha: 0.5,
    x: -100
  }, {
    autoAlpha: 1,
    x: 0,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "center center",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const fadeInUp = (el) => {
  gsap.fromTo(el, {
    yPercent: 150
  }, {
    yPercent: 0,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "bottom 70%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
}

export const fadeOutUp = (el) => {
  gsap.fromTo(el, {
    yPercent: 0,
  }, {
    yPercent: -150,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top 15%",
      end: "bottom 5%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })

}

export const slowScrollScale = (el) => (
  gsap.fromTo(el, {
    yPercent: 25
  }, {
    yPercent: -25,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top 100%",
      end: "bottom 0%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const pinSection = (el) => (
  ScrollTrigger.create({
    trigger: el,
    start: "center center",
    end: "+=50%",
    scrub: true,
    pin: true,
    pinSpacing: "margin"
  })
)