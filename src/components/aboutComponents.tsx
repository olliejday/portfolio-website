import * as React from "react"
import globalColours from "../styles/globalColours"

const textSm = "text-3xl md:text-6xl xl:text-7xl"
const textMd = "text-4xl md:text-7xl xl:text-8xl"
const textLg = "text-5xl md:text-8xl xl:text-9xl"

export function Timeline({ data }:
                           {
                             data: [{ date: string, title: string, subtitle: string }],
                           }) {
  // evens are on the right, odds are on the left
  return <div className="flex flex-col justify-around">
    {data.map(({ date, title, subtitle }, i) => (
      <div key={i}
           className={`${i % 2 === 0 ? "items-end text-right" : "items-start text-left"} justify-around flex flex-col my-6 md:m-10`}>
        <div className="w-full md:w-3/4">
          <p className={`${textSm} ${globalColours.textLight}`}>{date}</p>
          <p className={`${textMd} font-semibold`}>{title}</p>
          <p className={`${textSm} font-medium`}>{subtitle}</p>
        </div>
      </div>
    ))}
  </div>
}

export function AboutList({ data }: { data: [string] }) {
  return <div className="flex flex-col justify-end md:m-10">
    {data.map((item, i) => <p key={i} className={`${textMd} font-semibold my-5`}>{item}</p>)}
  </div>
}

export function Contact({
                          cv,
                          email
                        }: { cv: [[string, string]], email: [string, string] }) {
  const [emailText, link] = email
  return <div className="md:mx-10 flex flex-col justify-around">
    <div className="mt-10 overflow-hidden relative">
      <p className={`${textMd} my-3 md:my-10 font-medium`}>
        {cv.map(([title, file], i) => (<>
          <a key={i} className="hover:underline" href={file}>{title}</a>
          <span> {i < cv.length - 1 ? "/ " : ""}</span>
        </>))}</p>
    </div>
    <div className="overflow-hidden relative">
      {<p className={`${textSm} break-all my-3 md:my-10 hover:underline font-medium`}>
        <a href={link}>{emailText}</a>
      </p>
      }
    </div>
  </div>
}

export function AboutImage({ image }) {
  return <div className="w-1/3 absolute top-2/3 xl:top-0 right-1">{image}</div>
}

export function AboutBody({ data }) {
  return data.body.map((b, i) => <div className="overflow-hidden relative"><p key={i}
                                                                              className={`${textMd} font-semibold my-10`}>{b}</p>
  </div>)
}

export function AboutSubtitle({
                                subtitle
                              }: { subtitle: string }) {
  return <div className="overflow-hidden relative">
    <p key={subtitle} className={`${textMd} font-semibold my-3 md:m-5`}>
      {subtitle}
    </p>
  </div>
}

export function AboutTitle({ title }: { title: string }) {
  return <div className="overflow-hidden relative">
    <p key={title} className={`${textLg} font-bold mb-6`}>{title}</p>
  </div>
}

