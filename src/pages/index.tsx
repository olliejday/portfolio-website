import * as React from "react"
import Seo from "../components/Seo"
import { IndexPageBody } from "../components/IndexPageBody"
import Layout from "../components/Layout"
import HeroIndex from "../components/HeroIndex"
import { graphql } from "gatsby"


export default function IndexPage({ data }) {
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <HeroIndex title={data.site.siteMetadata.title} />
      <IndexPageBody data={data} />
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
  devPages : allFile(filter: {relativeDirectory: {eq: "pages/dev"}}, 
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
