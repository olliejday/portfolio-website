import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { gsap, Linear } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    title: "Architecto aliquam",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea."
  },
  {
    title: "Ceritatis placeat",
    subtitle: "Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?"
  },
  {
    title: "Vitae voluptates",
    subtitle: "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet."
  }
]

const App = () => {

  const headerRef = useRef(null)

  const revealRefs = useRef([])
  revealRefs.current = []

  const pinRef = useRef(null)

  useEffect(() => {

    gsap.fromTo(headerRef.current, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      ease: "none",
      delay: 1
    })

    revealRefs.current.forEach((el, index) => {

      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        y: -100,
        ease: Linear.easeNone,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          markers: true,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      })

      // gsap.fromTo(el, {}, {
      //   duration: 1,
      //   ease: "none",
      // y: -180,
      //   scrollTrigger: {
      //     id: `section-${index + 1}`,
      //     trigger: el,
      //     start: "bottom center+=100",
      //     toggleActions: "play none none reverse"
      //   }
      // })

    })

    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top 300px",
      end: "+=300",
      markers: true,
      pin: true
    })

  }, [])

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <div>
      <header className="h-screen text-gray-100 text-3xl bg-gray-800 flex flex-col items-center justify-center">
        <p className="bg-transparent" ref={headerRef}>
          Scroll down to see sections being revealed by ScrollTrigger.
        </p>
      </header>
      <main className="bg-gradient-to-b from-red-500 to-blue-600">
        {
          sections.map(({ title, subtitle }) => (
            <div className="h-screen">
              <div className="w-1/2 mx-auto bg-gray-200 p-20 flex flex-col items-center justify-center rounded-2xl"
                   key={title}
                   ref={addToRefs}>
                <p className="font-bold text-3xl">{title}</p>
                <p className="text-xl">{subtitle}</p>
              </div>
            </div>
          ))
        }
        <div className="h-screen">
          <div className="w-1/2 mx-auto bg-gray-200 p-20 flex flex-col items-center justify-center rounded-2xl" ref={pinRef}>
            <p className="font-bold text-3xl">Pin here</p>
            <p className="text-xl">This is a pin</p>
          </div>
        </div>
        <div className="w-1/2 mx-auto bg-gray-200 p-20 flex flex-col items-center justify-center rounded-2xl">
          <p className="font-bold text-3xl">Scroll placeholder</p>
          <p className="text-xl">This is a placeholder to scroll</p>
        </div>
      </main>
    </div>
  )
}

export default App
