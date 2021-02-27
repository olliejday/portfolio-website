import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import about from "../assets/pages/about/aboutContents"
import { AboutSection } from "../components/AboutSection"
import globalColours from "../styles/globalColours"


export default function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <div className={`flex flex-col items-center justify-around ${globalColours.bgBlack}`}>
        {about.map((data, i) => <AboutSection key={i} firstPage={i === 0} data={data} />)}
      </div>
    </Layout>
  )
}
