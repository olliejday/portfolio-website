import { gsap, Linear } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const fadeInLeft = (el) => (
  gsap.fromTo(el, {
    autoAlpha: 0,
    x: 100
  }, {
    duration: 1,
    autoAlpha: 1,
    x: 0,
    ease: Linear.easeNone,
    scrollTrigger: {
      trigger: el,
      start: "top center+=100",
      markers: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const fadeInRight = (el, index) => (
  gsap.fromTo(el, {
    autoAlpha: 0,
    x: -100
  }, {
    duration: 1,
    autoAlpha: 1,
    x: 0,
    ease: Linear.easeNone,
    scrollTrigger: {
      id: `section-${index + 1}`,
      trigger: el,
      start: "center center",
      markers: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const fadeInUp = (el, index) => (
  gsap.fromTo(el, {
    autoAlpha: 0,
    y: 50
  }, {
    duration: 1,
    autoAlpha: 1,
    y: 0,
    ease: Linear.easeNone,
    scrollTrigger: {
      id: `section-${index + 1}`,
      trigger: el,
      start: "center center",
      markers: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const slowScrollScale = (el, index) => (
  gsap.fromTo(el, {
    autoAlpha: 0,
  }, {
    duration: 1,
    autoAlpha: 1,
    y: 50,
    ease: Linear.easeNone,
    scrollTrigger: {
      id: `section-${index + 1}`,
      trigger: el,
      start: "center center",
      markers: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const pinSection = (el) => (
  ScrollTrigger.create({
    trigger: el,
    start: "center center",
    end: "+=500",
    markers: true,
    pin: true
  })
)