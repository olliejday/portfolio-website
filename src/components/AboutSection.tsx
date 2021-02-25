import * as React from "react"
import { AboutBody, AboutImage, AboutList, AboutSubtitle, AboutTitle, Contact, Timeline } from "./aboutComponents"
import { pinSection } from "../animations/animations"

export function AboutSection({ data }: { data: any }) {
  // if there are present it changes layout
  const image = data.hasOwnProperty("image") ? <AboutImage image={data.image} /> : null
  const timeline = data.hasOwnProperty("timeline") ? <Timeline data={data.timeline} /> : null
  const aboutList = data.hasOwnProperty("list") ? <AboutList data={data.list} /> : null
  const contact = data.hasOwnProperty("cv") ? <Contact cv={data.cv} email={data.email} /> : null
  // get layout type
  const fullpage = timeline !== null || aboutList !== null || contact !== null
  const halfpage = image !== null
  // other elements
  const title = data.hasOwnProperty("title") ? <AboutTitle title={data.title} doFadeOut={!fullpage} /> : null
  const subtitle = data.hasOwnProperty("subtitle") ?
    <AboutSubtitle subtitle={data.subtitle} doFadeOut={!fullpage} /> : null
  const body = data.hasOwnProperty("body") ? <AboutBody data={data} doFadeOut={!fullpage} /> : null

  return <div className="w-screen p-10 box-border bg-gray-100" ref={fullpage ? pinSection : null}>
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