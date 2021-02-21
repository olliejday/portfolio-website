import * as React from "react"
import Seo from "../components/Seo"
import { BlueBGRotated } from "../components/angleGradients"
import { Navbar } from "../components/Navbar"
import { IndexPageBody } from "../components/IndexPageBody"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <Navbar />
      <Hero title={data.site.siteMetadata.title}
            about={data.markdownFront.childMdx.frontmatter.about}
            image={data.imageFront.childImageSharp.fluid} />
      <IndexPageBody data={data} />

      {/*<BlueBGRotated />*/}

    </Layout>
  )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  markdownFront: file(relativePath: {eq: "markdown/about/home-about.mdx"}) {
      childMdx {
        frontmatter {
          about
        }
      }
    }
    imageFront: file(relativePath: { eq: "images/portrait_pic.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }    
    markdownPages: allMdx (
      filter: { fields: { slug: { ne: null } } }
      sort: { fields: frontmatter___order, order: DESC }
    ){
    nodes {
      fields {
        slug
      }
      frontmatter {
          title
          subtitle
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    }
  }
 }
`
