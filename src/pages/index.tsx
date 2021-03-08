import * as React from "react"
import { useEffect, useRef } from "react"
import Seo from "../components/Seo"
import { IndexPageBody } from "../components/IndexPageBody"
import Layout from "../components/Layout"
import HeroIndex from "../components/HeroIndex"
import { graphql } from "gatsby"
import globalColours from "../styles/globalColours"

export default function IndexPage({ data }) {
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
      <Seo title={data.site.siteMetadata.title} />
        <div className={`${globalColours.bgDark}`} ref={scrollRef}>
          <HeroIndex title={data.site.siteMetadata.title} />
          <IndexPageBody data={data} />
        </div>
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
    uxPages : allFile(filter: {relativeDirectory: {eq: "pages/ux"}}, 
    sort: {fields: childMdx___frontmatter___order, order: ASC}) {
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
  devPages : allFile(filter: {relativeDirectory: {eq: "pages/dev"}}, 
    sort: {fields: childMdx___frontmatter___order, order: ASC}) {
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
