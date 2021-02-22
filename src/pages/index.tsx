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
    <Layout title={data.site.siteMetadata.title}>
      <Seo title={data.site.siteMetadata.title} />
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
    uxPages : allFile(filter: {relativeDirectory: {eq: "markdown/ux"}}, 
    sort: {fields: childMdx___frontmatter___order, order: DESC}) {
    edges {
      node {
        childMdx {
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
          fields {
            slug
          }
        }
      }
    }
  }
 }
`
