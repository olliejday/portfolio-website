import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import GatsbyImage from "gatsby-image"
import about from "../assets/pages/about/aboutContents"

const textSm = "text-4xl md:text-6xl lg:text-7xl"
const textMd = "text-5xl md:text-7xl lg:text-8xl"
const textLg = "text-6xl md:text-8xl lg:text-9xl "

function Timeline({ data }: { data: [{ date: string, title: string, subtitle: string }] }) {
  return <div className="flex flex-col justify-around">
    {data.map(({ date, title, subtitle }, i) => (
      <div
        className={`${i % 2 === 0 ? "items-end text-right" : "items-start text-left"} justify-around flex flex-col m-10`}>
        <p className={`${textSm}`}>{date}</p>
        <p className={`${textMd} font-bold`}>{title}</p>
        <p className={`${textSm}`}>{subtitle}</p>
      </div>
    ))}
  </div>
}

function AboutList({ data }: { data: [string] }) {
  return <div className="flex flex-col justify-end m-10">
    {data.map(item => <p className={`${textMd} font-bold my-5`}>{item}</p>)}
  </div>
}

function Contact({ cv, email }: { cv: [[string, string]], email: [string, string] }) {
  const [emailText, link] = email
  return <div className="flex flex-col justify-around">
    <div className="my-10">
      {cv.map(([title, file], i) => <a className={`${textMd}`} href={file}>{title} {i < cv.length - 1 ? "/ " : ""}</a>)}
    </div>
    {<a className={`${textSm} break-all my-10`} href={link}>{emailText}</a>}
  </div>
}

function AboutSection({ data }: { data: any }) {
  const title = data.hasOwnProperty("title") ? <p className={`${textLg} font-bold mb-6`}>{data.title}</p> : null
  const subtitle = data.hasOwnProperty("subtitle") ? <p className={`${textMd} font-bold m-5`}>{data.subtitle}</p> : null
  const body = data.hasOwnProperty("body") ? data.body.map(b => <p
    className={`${textMd} font-bold my-10`}>{b}</p>) : null
  const contact = data.hasOwnProperty("cv") ? <Contact cv={data.cv} email={data.email} /> : null
  const image = data.hasOwnProperty("image") ? <div className="w-1/3 absolute bottom-10 right-1">{data.image}</div> : null
  const timeline = data.hasOwnProperty("timeline") ? <Timeline data={data.timeline} /> : null
  const aboutList = data.hasOwnProperty("list") ? <AboutList data={data.list} /> : null
  const fullpage = timeline || aboutList
  const halfpage = image
  return <div className="w-screen p-10 box-border bg-gray-100">
    <div
      className={`w-full box-border bg-${data.colour}-100 text-${data.colour}-900 overflow-hidden relative flex flex-row`}>
      {/* Full page */}
      {timeline}
      {/* How much space for the title etc */}
      <div className={ fullpage ? "" : halfpage ? `w-2/3 relative z-10 flex flex-col p-10` : `w-full relative z-10 flex flex-col p-10`}>
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
  console.log("about", about)
  return (
    <Layout>
      <Seo title="About" />
      <div className="flex flex-col items-center justify-around">
        <AboutSection data={about[0]} />
        <AboutSection data={about[1]} />
        <AboutSection data={about[2]} />
        <AboutSection data={about[3]} />
      </div>
    </Layout>
  )
}
