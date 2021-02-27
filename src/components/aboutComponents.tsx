import * as React from "react"
import globalColours from "../styles/globalColours"

const textSm = "text-4xl md:text-6xl lg:text-7xl"
const textMd = "text-5xl md:text-7xl lg:text-8xl"
const textLg = "text-6xl md:text-8xl lg:text-9xl "

export function Timeline({ data, animationRefLeft, animationRefRight }:
                           {
                             data: [{ date: string, title: string, subtitle: string }],
                             animationRefLeft: (el) => void,
                             animationRefRight: (el) => void
                           }) {
  // evens are on the right, odds are on the left
  return <div className="flex flex-col justify-around">
    {data.map(({ date, title, subtitle }, i) => (
      <div key={i} ref={i % 2 === 0 ? animationRefLeft : animationRefRight}
           className={`${i % 2 === 0 ? "items-end text-right" : "items-start text-left"} justify-around flex flex-col m-10`}>
        <p className={`${textSm} ${globalColours.textLight} font-medium`}>{date}</p>
        <p className={`${textMd} font-bold`}>{title}</p>
        <p className={`${textSm} font-medium`}>{subtitle}</p>
      </div>
    ))}
  </div>
}

export function AboutList({ data, animationRef }: { data: [string], animationRef: (el) => void }) {
  return <div className="flex flex-col justify-end m-10">
    {data.map((item, i) => <p key={i} ref={animationRef} className={`${textMd} font-bold my-5`}>{item}</p>)}
  </div>
}

export function Contact({
                          cv,
                          email,
                          animationRef
                        }: { cv: [[string, string]], email: [string, string], animationRef: (el) => void }) {
  const [emailText, link] = email
  return <div className="mx-10 flex flex-col justify-around">
    <div className="mt-10 overflow-hidden relative">
      <p className={`${textMd} my-10 font-medium`}
         ref={animationRef}>{cv.map(([title, file], i) => (<>
        <a key={i} className="hover:underline" href={file}>{title}</a>
        <span> {i < cv.length - 1 ? "/ " : ""}</span>
      </>))}</p>
    </div>
    <div className="overflow-hidden relative">
      {<p className={`${textSm} break-all my-10 hover:underline font-medium`}
          ref={animationRef}>
        <a href={link}>{emailText}</a>
      </p>
      }
    </div>
  </div>
}

export function AboutImage({ image, animationRef }) {
  return <div className="w-1/3 absolute 2xl:top-0 bottom-10 right-1" ref={animationRef}>{image}</div>
}

export function AboutBody({ data, animationRef }) {
  return data.body.map((b, i) => <div className="overflow-hidden relative"><p key={i} ref={animationRef}
                                                                              className={`${textMd} font-bold my-10`}>{b}</p>
  </div>)
}

export function AboutSubtitle({
                                subtitle, animationRef
                              }: { subtitle: string, animationRef: (el) => void }) {
  return <div className="overflow-hidden relative">
    <p key={subtitle} className={`${textMd} font-bold m-5`}
       ref={animationRef}>{subtitle}</p>
  </div>
}

export function AboutTitle({ title, animationRef }: { title: string, animationRef: (el) => void }) {
  return <div className="overflow-hidden relative">
    <p key={title} className={`${textLg} font-bold mb-6`} ref={animationRef}>{title}</p>
  </div>
}

