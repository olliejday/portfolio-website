import * as React from "react"

const textSm = "text-4xl md:text-6xl lg:text-7xl"
const textMd = "text-5xl md:text-7xl lg:text-8xl"
const textLg = "text-6xl md:text-8xl lg:text-9xl "

export function Timeline({ data, addToRefsLeft, addToRefsRight }: { data: [{ date: string, title: string, subtitle: string }],
  addToRefsLeft: (el) => void, addToRefsRight: (el) => void }) {
  // evens are on the right, odds are on the left
  return <div className="flex flex-col justify-around">
    {data.map(({ date, title, subtitle }, i) => (
      <div key={i}  ref={i % 2 === 0 ? addToRefsLeft : addToRefsRight}
        className={`${i % 2 === 0 ? "items-end text-right" : "items-start text-left"} justify-around flex flex-col m-10`}>
        <p className={`${textSm}`}>{date}</p>
        <p className={`${textMd} font-bold`}>{title}</p>
        <p className={`${textSm}`}>{subtitle}</p>
      </div>
    ))}
  </div>
}

export function AboutList({ data, addToRefs }: { data: [string], addToRefs: (el) => void }) {
  return <div className="flex flex-col justify-end m-10">
    {data.map((item, i) => <p key={i} ref={addToRefs} className={`${textMd} font-bold my-5`}>{item}</p>)}
  </div>
}

export function Contact({ cv, email }: { cv: [[string, string]], email: [string, string] }) {
  const [emailText, link] = email
  return <div className="flex flex-col justify-around">
    <div className="my-10">
      {cv.map(([title, file], i) => <a key={i} className={`${textMd} hover:underline`}
                                       href={file}>{title} {i < cv.length - 1 ? "/ " : ""}</a>)}
    </div>
    {<a className={`${textSm} break-all my-10 hover:underline`} href={link}>{emailText}</a>}
  </div>
}

export function AboutImage(props: { image: any }) {
  return <div className="w-1/3 absolute 2xl:top-0 bottom-10 right-1">{props.image}</div>
}

export function AboutBody({ data }) {
  return data.body.map((b, i) => <p key={i}
    className={`${textMd} font-bold my-10`}>{b}</p>)
}

export function AboutSubtitle({ subtitle
                              }: { subtitle: string }) {
  return <p key={subtitle} className={`${textMd} font-bold m-5`} >{subtitle}</p>
}

export function AboutTitle({ title }: { title: string }) {
  return <p className={`${textLg} font-bold mb-6`}>{title}</p>
}