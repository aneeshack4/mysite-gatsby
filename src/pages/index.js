import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there</h1>
    <p>I'm an engineer at Microsoft. I'm currently working in open source web dev, helping build <a href="https://developer.microsoft.com/en-us/fabric#/">Fabric</a>. </p>
    <p>Outside of coding, I travel a lot (16 countries and counting!), love learning new languages, dancing, tennis, and piano.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
