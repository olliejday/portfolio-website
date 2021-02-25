import * as React from "react"
import { fadeInLeft, fadeInRight, fadeInUp, fadeOutUp, slowScrollScale } from "../animations/animations"

const textSm = "text-4xl md:text-6xl lg:text-7xl"
const textMd = "text-5xl md:text-7xl lg:text-8xl"
const textLg = "text-6xl md:text-8xl lg:text-9xl "

export function Timeline({ data }: { data: [{ date: string, title: string, subtitle: string }]}) {
  // evens are on the right, odds are on the left
  return <div className="flex flex-col justify-around">
    {data.map(({ date, title, subtitle }, i) => (
      <div key={i}  ref={i % 2 === 0 ? fadeInLeft : fadeInRight}
        className={`${i % 2 === 0 ? "items-end text-right" : "items-start text-left"} justify-around flex flex-col m-10`}>
        <p className={`${textSm}`}>{date}</p>
        <p className={`${textMd} font-bold`}>{title}</p>
        <p className={`${textSm}`}>{subtitle}</p>
      </div>
    ))}
  </div>
}

export function AboutList({ data }: { data: [string]}) {
  return <div className="flex flex-col justify-end m-10">
    {data.map((item, i) => <p key={i} ref={fadeInRight} className={`${textMd} font-bold my-5`}>{item}</p>)}
  </div>
}

export function Contact({ cv, email }: { cv: [[string, string]], email: [string, string] }) {
  const [emailText, link] = email
  return <div className="flex flex-col justify-around">
    <div className="my-10">
      {cv.map(([title, file], i) => <a key={i} className={`${textMd} hover:underline`} ref={fadeInUp}
                                       href={file}>{title} {i < cv.length - 1 ? "/ " : ""}</a>)}
    </div>
    {<a className={`${textSm} break-all my-10 hover:underline`} href={link} ref={fadeInUp}>{emailText}</a>}
  </div>
}

export function AboutImage(props: { image: any }) {
  return <div className="w-1/3 absolute 2xl:top-0 bottom-10 right-1" ref={slowScrollScale}>{props.image}</div>
}

export function AboutBody({ data, doFadeOut }) {
  return data.body.map((b, i) => <p key={i} ref={(el) => {
    fadeInUp(el)
    if (doFadeOut) fadeOutUp(el)
  }}
    className={`${textMd} font-bold my-10`}>{b}</p>)
}
AboutBody.defaultProps = {doFadeOut : true}

export function AboutSubtitle({ subtitle, doFadeOut
                              }: { subtitle: string, doFadeOut: boolean }) {
  return <p key={subtitle} className={`${textMd} font-bold m-5`} ref={(el) => {
    fadeInUp(el)
    if (doFadeOut) fadeOutUp(el)
  }}>{subtitle}</p>
}
AboutSubtitle.defaultProps = {doFadeOut : true}

export function AboutTitle({ title, doFadeOut }: { title: string, doFadeOut: boolean }) {
  return <p key={title} className={`${textLg} font-bold mb-6`} ref={(el) => {
    fadeInUp(el)
    if (doFadeOut) fadeOutUp(el)
  }}>{title}</p>
}

AboutTitle.defaultProps = {doFadeOut : true}