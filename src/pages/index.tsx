import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Bio from "../components/bio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to My new Gatsby Blog.</p>
    <Bio/>
    <Link to="/blog/">Vist my Blog
    </Link> <br /><a href="https://twitter.com/muhamma45165722">Twitter</a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
   
  </Layout>
)

export default IndexPage
