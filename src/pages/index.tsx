import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Maintemplate from "./Maintemplate"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Maintemplate />
  </Layout>
)

export default IndexPage
