import { gsap, Power1 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
    autoAlpha: 0,
    y: 50
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "bottom 90%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
}

export const fadeOutUp = (el) => {
  gsap.fromTo(el, {
    autoAlpha: 1,
    y: 0
  }, {
    autoAlpha: 0,
    y: -50,
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: el,
      start: "top 5%",
      end: "bottom 7%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })

}

export const slowScrollScale = (el) => (
  gsap.fromTo(el, {
    y: 100
  }, {
    y: -100,
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
    end: "+=500",
    scrub: true,
    pin: true
  })
)