import * as React from "react"
import { AboutBody, AboutImage, AboutList, AboutSubtitle, AboutTitle, Contact, Timeline } from "./aboutComponents"
import { fadeInLeft, fadeInRight, fadeInUp, fadeOutUp, pinSection, slowScrollScale } from "../animations/animations"
import { useEffect, useRef } from "react"


export function AboutSection({ data }: { data: any }) {
  // refs for animations
  const pinRef = useRef(null)
  const fadeInUpRefs = useRef([])
  fadeInUpRefs.current = []
  const fadeOutUpRefs = useRef([])
  fadeOutUpRefs.current = []
  const fadeInLeftRefs = useRef([])
  fadeInLeftRefs.current = []
  const fadeInRightRefs = useRef([])
  fadeInRightRefs.current = []
  const slowScrollScaleRefs = useRef([])
  slowScrollScaleRefs.current = []
  const addToRefs = refList => el => {
    if (el && !refList.current.includes(el)) {
      refList.current.push(el)
    }
  }
  // apply the animations once refs loaded
  useEffect(() => {
    if (pinRef.current !== null) pinSection(pinRef.current)
    fadeInUpRefs.current.forEach(el => {
      fadeInUp(el)
    })
    fadeOutUpRefs.current.forEach(el => {
      fadeOutUp(el)
    })
    fadeInLeftRefs.current.forEach(el => {
      fadeInLeft(el)
    })
    fadeInRightRefs.current.forEach(el => {
      fadeInRight(el)
    })
    slowScrollScaleRefs.current.forEach(el => {
      slowScrollScale(el)
    })
  }, [])

  // parse the data into compoenents
  // if there are present it changes layout
  const image = data.hasOwnProperty("image") ? <AboutImage image={data.image}
                                                           animationRef={addToRefs(slowScrollScaleRefs)} /> : null
  const timeline = data.hasOwnProperty("timeline") ? <Timeline data={data.timeline}
                                                               animationRefLeft={addToRefs(fadeInLeftRefs)}
                                                               animationRefRight={addToRefs(fadeInRightRefs)} /> : null
  const aboutList = data.hasOwnProperty("list") ? <AboutList data={data.list}
                                                             animationRef={addToRefs(fadeInLeftRefs)} /> : null
  const contact = data.hasOwnProperty("cv") ? <Contact cv={data.cv} email={data.email}
                                                       animationRef={addToRefs(fadeInUpRefs)} /> : null
  // get layout type
  const fullpage = timeline !== null || aboutList !== null || contact !== null
  const halfpage = image !== null
  // other elements
  const title = data.hasOwnProperty("title") ? <AboutTitle title={data.title}
                                                           animationRef={el => {
                                                             addToRefs(fadeInUpRefs)(el)
                                                             if (!fullpage) addToRefs(fadeOutUpRefs)(el)
                                                           }} /> : null
  const subtitle = data.hasOwnProperty("subtitle") ?
    <AboutSubtitle subtitle={data.subtitle} animationRef={el => {
      addToRefs(fadeInUpRefs)(el)
      if (!fullpage) addToRefs(fadeOutUpRefs)(el)
    }} /> : null
  const body = data.hasOwnProperty("body") ? <AboutBody data={data} animationRef={el => {
    addToRefs(fadeInUpRefs)(el)
    if (!fullpage) addToRefs(fadeOutUpRefs)(el)
  }} /> : null

  return <div className="w-screen p-10 box-border bg-gray-100" ref={pinRef}>
    <div
      // TODO : className={`w-full box-border ${data.colours} overflow-hidden relative flex flex-row`}>
      className={`w-full box-border font-display text-gray-100 bg-gray-800 overflow-hidden relative flex flex-row`}>
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