import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import about from "../assets/pages/about/aboutContents"
import { AboutSection } from "../components/AboutSection"
import globalColours from "../styles/globalColours"
import { useEffect, useRef } from "react"


export default function AboutPage() {
  const scrollRef = useRef(null)
  useEffect(() => {import("locomotive-scroll").then(locomotiveModule => {
    const scroll = new locomotiveModule.default({
      el: scrollRef.current,
      smooth: true,
    })
    setTimeout(() => scroll.update(), 300);
  })
  }, [])
  return (
    <Layout hideOverflowY>
      <Seo title="About" />
      <div className={`flex flex-col items-center justify-around ${globalColours.bgDark} pb-6 md:pb-36 lg:pb-48`}
           ref={scrollRef}>
        {about.map((data, i) => <AboutSection key={i} firstPage={i === 0} data={data} />)}
      </div>
    </Layout>
  )
}
