import * as React from "react"
import globalColours from "../styles/globalColours"
import "./styles/aboutComponents.css"

const textSm = "text-3xl md:text-6xl xl:text-7xl"
const textMd = "text-4xl md:text-7xl xl:text-8xl"
const textLg = "text-5xl md:text-8xl xl:text-9xl"

function LeftTimeline({i, date, title, subtitle} :
                        { i: number, date: string, title: string, subtitle: string }) {
  return <div key={i}
              className={`scrollFadeIn w-full items-start text-left justify-around flex flex-col my-6 md:m-10`}
              data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal"
              data-scroll-delay="0.2"
  >
    <div className="w-2/3">
      <p className={`${textSm} ${globalColours.textLight}`}>{date}</p>
      <p className={`${textMd} font-semibold`}>{title}</p>
      <p className={`${textSm} font-medium`}>{subtitle}</p>
    </div>
  </div>
}

function RightTimeline({i, date, title, subtitle} :
                         { i: number, date: string, title : string, subtitle: string }) {
  return <div key={i}
              className={`scrollFadeIn w-full items-end text-right justify-around flex flex-col my-6 md:m-10`}
              data-scroll data-scroll-speed="3" data-scroll-direction="horizontal"
              data-scroll-delay="0.2"
  >
    <div className="w-2/3">
      <p className={`${textSm} ${globalColours.textLight}`}>{date}</p>
      <p className={`${textMd} font-semibold`}>{title}</p>
      <p className={`${textSm} font-medium`}>{subtitle}</p>
    </div>
  </div>
}

export function Timeline({ data }:
                           {
                             data: [{ date: string, title: string, subtitle: string }],
                           }) {
  // evens are on the right, odds are on the left
  return <div className="flex flex-col justify-around">
    {data.map(({ date, title, subtitle }, i) =>
      (i % 2) === 0
        ? <RightTimeline key={i} i={i} date={date}
                         title={title} subtitle={subtitle} />
        : <LeftTimeline key={i} i={i} date={date}
                          title={title} subtitle={subtitle} />)}
  </div>
}

export function AboutList({ data }: { data: [string] }) {
  const scrollDelay = 0.03
  return <div className="flex flex-col justify-end md:m-10">
    {data.map((item, i) =>
      <p key={i} className={`${textMd} scrollFadeIn font-semibold my-5`}
         data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal"
         data-scroll-delay={`${Math.min((data.length + 1) * scrollDelay, 1) - (i + 1) * scrollDelay}`}
      >
        {item}
      </p>
    )}
  </div>
}

export function Contact({
                          cv,
                          email
                        }: { cv: [[string, string]], email: [string, string] }) {
  const [emailText, link] = email
  return <div className="md:mx-10 flex flex-col justify-around">
    <div className="mt-10 relative"
         data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
      <p className={`${textMd} my-3 md:my-10 font-medium`}>
        {cv.map(([title, file], i) => (<React.Fragment key={i}>
          <a key={i} className="hover:underline" href={file}>{title}</a>
          <span key={"span" + i}> {i < cv.length - 1 ? "/ " : ""}</span>
        </React.Fragment>))}</p>
    </div>
    <div className="relative"
         data-scroll data-scroll-speed="2" data-scroll-delay="0.05">
      <p className={`${textSm} break-all my-3 md:my-10 hover:underline font-medium`}>
        <a href={link}>{emailText}</a>
      </p>
    </div>
  </div>
}

export function AboutImage({ image }) {
  return <div className="w-1/3 absolute top-2/3 xl:top-28 right-1"
              data-scroll data-scroll-speed="3"
              data-scroll-delay="0.05"
  >
    {image}
  </div>
}

export function AboutBody({ data }) {
  const scrollDelay = 0.05
  return data.body.map((b, i) => <div key={i}
                                      className="relative"
                                      data-scroll data-scroll-speed="2"
                                      data-scroll-delay={`${Math.min((data.body.length + 1) * scrollDelay, 1) - (i + 1) * scrollDelay}`}
  >
    <p key={i} className={`${textMd} font-semibold my-10`}>{b}</p>
  </div>)
}

export function AboutSubtitle({
                                subtitle
                              }: { subtitle: string }) {
  return <div className="relative my-5"
              data-scroll data-scroll-speed="2" data-scroll-delay="0.3">
    <p key={subtitle} className={`${textMd} font-semibold my-3 md:m-5`}>
      {subtitle}
    </p>
  </div>
}

export function AboutTitle({ title }: { title: string }) {
  return <div className="relative">
    <p key={title} className={`${textLg} font-bold mb-6`}>{title}</p>
  </div>
}

