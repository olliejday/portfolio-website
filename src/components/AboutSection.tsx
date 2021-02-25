import * as React from "react"
import { useEffect, useRef } from "react"
import { AboutBody, AboutImage, AboutList, AboutSubtitle, AboutTitle, Contact, Timeline } from "./aboutComponents"
import { fadeInLeft, fadeInRight, pinSection } from "../animations/animations"

export function AboutSection({ data, index }: { data: any, index: number }) {
  const fadeInLeftRefs = useRef([])
  fadeInLeftRefs.current = []
  const addToFadeInLeft = el => {
    if (el && !fadeInLeftRefs.current.includes(el)) {
      fadeInLeftRefs.current.push(el)
    }
  }

  const fadeInRightRefs = useRef([])
  fadeInRightRefs.current = []
  const addToFadeInRight = el => {
    if (el && !fadeInRightRefs.current.includes(el)) {
      fadeInRightRefs.current.push(el)
    }
  }

  useEffect(() => {
    fadeInLeftRefs.current.forEach((el, index) => {
      fadeInLeft(el)
    })
    fadeInRightRefs.current.forEach((el, index) => {
      fadeInRight(el, index)
    })
  }, [])


  const title = data.hasOwnProperty("title") ? <AboutTitle title={data.title} /> : null
  const subtitle = data.hasOwnProperty("subtitle") ?
    <AboutSubtitle subtitle={data.subtitle} /> : null
  const body = data.hasOwnProperty("body") ? <AboutBody data={data} /> : null
  const contact = data.hasOwnProperty("cv") ? <Contact cv={data.cv} email={data.email} /> : null
  const image = data.hasOwnProperty("image") ? <AboutImage image={data.image} /> : null
  const timeline = data.hasOwnProperty("timeline") ? <Timeline data={data.timeline}
                                                               addToRefsLeft={addToFadeInLeft}
                                                               addToRefsRight={addToFadeInRight} /> : null
  const aboutList = data.hasOwnProperty("list") ? <AboutList data={data.list} addToRefs={fadeInLeft} /> : null
  const fullpage = timeline || aboutList
  const halfpage = image !== null
  return <div className="w-screen p-10 box-border bg-gray-100" ref={pinSection}>
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