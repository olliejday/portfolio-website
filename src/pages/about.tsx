import * as React from "react"
import { useEffect, useRef } from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import about from "../assets/pages/about/aboutContents"
import { gsap, Linear } from "gsap"
import {
  AboutBody,
  AboutImage,
  AboutList,
  AboutSubtitle,
  AboutTitle,
  Contact,
  Timeline
} from "../components/aboutComponents"


function AboutSection({ data, index }: { data: any, index: number }) {
  const revealRefs = useRef([])
  revealRefs.current = []
  const addToRefs = el => {
    console.log(el, revealRefs.current.includes(el), revealRefs.current)
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      console.log("useEffect on", el)
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        y: -10,
        ease: Linear.easeNone,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top center+=100",
          markers: true,
          toggleActions: "play none none reverse"
        }
      })
    })
  }, [])


  const title = data.hasOwnProperty("title") ? <AboutTitle title={data.title} /> : null
  const subtitle = data.hasOwnProperty("subtitle") ?
    <AboutSubtitle subtitle={data.subtitle} /> : null
  const body = data.hasOwnProperty("body") ? <AboutBody data={data} /> : null
  const contact = data.hasOwnProperty("cv") ? <Contact cv={data.cv} email={data.email} /> : null
  const image = data.hasOwnProperty("image") ? <AboutImage image={data.image} /> : null
  const timeline = data.hasOwnProperty("timeline") ? <Timeline data={data.timeline} addToRefs={addToRefs} /> : null
  const aboutList = data.hasOwnProperty("list") ? <AboutList data={data.list} /> : null
  const fullpage = timeline || aboutList
  const halfpage = image !== null
  return <div className="w-screen p-10 box-border bg-gray-100">
    <div
      className={`w-full box-border ${data.colours} overflow-hidden relative flex flex-row`}>
      {/* Full page */}
      {timeline}
      {/* How much space for the title etc */}
      <div
        className={fullpage ? "" : halfpage ? `w-2/3 relative z-10 flex flex-col p-10` : `w-full relative z-10 flex flex-col p-10`}>
        {title}
        {subtitle}
        {body}
        {contact}
        {aboutList}
      </div>
      {/* Right */}
      {image}
    </div>

  </div>
}

export default function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <div className="flex flex-col items-center justify-around">
        {about.map((data, i) => <AboutSection key={i} data={data} index={i} />)}
      </div>
    </Layout>
  )
}
