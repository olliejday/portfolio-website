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
    ease: Power1.easeIn,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "center 40%",
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
    ease: Power1.easeIn,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "center 40%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
)

export const dropInDown = (el) => {
  gsap.fromTo(el, {
    yPercent: -200,
    autoAlpha: 0
  }, {
    yPercent: 0,
    autoAlpha: 1,
    ease: Power1.easeIn,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "bottom 50%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
}

export const DropOutUp = (el) => {
  gsap.fromTo(el, {
    yPercent: 0,
    autoAlpha: 1
  }, {
    yPercent: -150,
    autoAlpha: 0,
    ease: Power1.easeOut,
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
      start: "top bottom",
      end: "bottom top",
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

export const indexPagePreviewTextAnimation = (el) => {
  gsap.fromTo(el, {
    yPercent: 70,
    autoAlpha: 0
  }, {
    yPercent: 0,
    autoAlpha: 1,
    ease: Power1.easeIn,
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "bottom 75%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
  // drop up and out
  gsap.fromTo(el, {
  }, {
    yPercent: -100,
    autoAlpha: 0,
    ease: Power1.easeIn,
    scrollTrigger: {
      trigger: el,
      start: "top 20%",
      end: "bottom 7.5%",
      scrub: true,
      toggleActions: "play none none reverse"
    }
  })
}


export const indexPageImageAnimation = (el) => (
  gsap.fromTo(el, {
    yPercent: 10,
    scale: 1
  }, {
    yPercent: -10,
    scale: 1.1,
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

export const indexTitleDropIn = (el) => {
  gsap.fromTo(el, {
    yPercent: -200,
    rotate: -10,
    autoAlpha: 0
  }, {
    yPercent: 0,
    rotate: 0,
    autoAlpha: 1,
    ease: Power1.easeIn,
    delay: 0.333
  })
}

