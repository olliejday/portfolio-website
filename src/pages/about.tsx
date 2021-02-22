import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import GatsbyImage from "gatsby-image"

export default function IndexPage({ data }) {
  const post = data.markdown.childMdx
  return (
    <Layout>
      <Seo title="About" />
      <div className="flex flex-row items-center justify-around mt-20">
        <article className="prose w-1/3 lg:prose-lg">
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        {/*<div*/}
        {/*  className="w-1/3 sm:block hidden">*/}
        {/*  <GatsbyImage fluid={data.imageFront.childImageSharp.fluid} alt={"Close up portrait of person"} />*/}
        {/*</div>*/}
      </div>
    </Layout>
  )
}


export const query = graphql`
{
  markdown: file(relativePath: {eq: "markdown/about/home-about.mdx"}) {
    childMdx {
      frontmatter {
        title
      }
      body
    }
  }
  imageFront: file(relativePath: { eq: "images/portrait_pic.png" }) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid
    }
  }
} 
}
`
