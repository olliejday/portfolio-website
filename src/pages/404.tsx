import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <p className="md:text-7xl text-6xl font-bold flex justify-center text-center mt-10 text-gray-700">404: Not Found</p>
    <Link className="md:text-6xl text-5xl font-bold flex justify-center mt-10 text-center underline text-gray-700"
          to={"/"}>Home</Link>
  </Layout>
)

export default NotFoundPage
