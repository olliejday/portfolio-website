import * as React from "react"
import { Navbar } from "./Navbar"
import { graphql, StaticQuery } from "gatsby"

export default function Layout({ children, hideOverflowY}) {
  return (
    <>
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
      <div className={`relative w-full overflow-x-hidden ${hideOverflowY ? "" : "h-screen"}`}>
        {children}
      </div>
    </>
  )
}
Layout.defaultProps = { hideOverflowY: false }