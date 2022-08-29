import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => (
  <Layout location={props.location}>
    <Seo title="Home" />
    <main>
      <article className="big-text">
        <h1>Nova Larkin Schrage</h1>
        <h2>poems & star repair</h2>
      </article>
    </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="home" />

export default IndexPage
