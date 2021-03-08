import * as React from "react"
import { AboutBody, AboutImage, AboutList, AboutSubtitle, AboutTitle, Contact, Timeline } from "./aboutComponents"
import globalColours from "../styles/globalColours"


export function AboutSection({ data, firstPage }: { data: any, firstPage: boolean }) {

  // parse the data into compoenents
  // if there are present it changes layout
  const image = data.hasOwnProperty("image") ? <AboutImage image={data.image} /> : null
  const timeline = data.hasOwnProperty("timeline") ? <Timeline data={data.timeline} /> : null
  const aboutList = data.hasOwnProperty("list") ? <AboutList data={data.list} /> : null
  const contact = data.hasOwnProperty("cv") ? <Contact cv={data.cv} email={data.email} /> : null
  // get layout type
  const fullpage = timeline !== null || aboutList !== null || contact !== null
  const halfpage = image !== null
  // other elements
  const title = data.hasOwnProperty("title") ? <AboutTitle title={data.title} /> : null
  const subtitle = data.hasOwnProperty("subtitle") ?
    <AboutSubtitle subtitle={data.subtitle} /> : null
  const body = data.hasOwnProperty("body") ? <AboutBody data={data} /> : null

  return <div className="w-screen my-10 p-7 md:p-10 box-border" >
    <div
      className={`w-full box-border font-medium font-display ${globalColours.textLightest} overflow-hidden flex flex-row`}>
      {/* Full page */}
      {timeline}
      {/* How much space for the title etc */}
      <div
        className={fullpage ? "" : `${halfpage ? `md:w-2/3` : ""} relative z-10 flex flex-col md:p-10`}>
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

AboutSection.defaultProps = { firstPage: false }