import * as React from "react"
import { Navbar } from "./Navbar"
import { graphql, StaticQuery } from "gatsby"

export default function Layout({ children }) {
  return (
    <div className="relative w-full overflow-x-hidden">
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
        render={data => (
          <Navbar title={data.site.siteMetadata.title} />
        )}
      />
      {children}
    </div>
  )
}