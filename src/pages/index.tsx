import * as React from "react"
import Seo from "../components/Seo"
import { AngleGradient, BlueBGRotated } from "../components/angleGradients"
import { Navbar } from "../components/Navbar"
import { IndexPageBody } from "../components/IndexPageBody"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"

export default function IndexPage({data}) {
    return (
        <Layout>
          <Seo title={data.site.siteMetadata.title} />
          <Navbar />
          <Hero title={"Oliver Day Portfolio"} about={"This is my about"}/>
          <div className="w-full pb-52 bg-gray-100">
            <IndexPageBody />
          </div>

          <BlueBGRotated />

        </Layout>
    )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
