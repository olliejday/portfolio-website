import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "./styles/pages.css"  // don't use module here bc need to access class name for md figure captions


const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { site, mdx } }) {
  return (
    <Layout>
    <Seo title={mdx.frontmatter.title} description={mdx.excerpt} />
      <div className="mt-10 lg:mt-20">
        <article className="prose mx-auto px-2 lg:prose-lg">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <div className="caseStudyPageBottomMargin"/>
        </article>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    site {
        siteMetadata {
          title
          description
        }
      }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      excerpt
    }
  }
`