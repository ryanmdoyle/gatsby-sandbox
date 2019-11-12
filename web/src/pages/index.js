import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Gallery from '../components/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Gallery />
  </Layout>
)

export default IndexPage
