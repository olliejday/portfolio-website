import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const NotFoundPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <Seo title="404: Not found" />
    <p>404: Not Found</p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }`