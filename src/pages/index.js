import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => (
  <Layout location={props.location}>
    <div className="main">
      <article className="big-text">
        <h1>Nova Larkin Schrage</h1>
        <h2>poems & star repair</h2>
      </article>
    </div>
  </Layout>
)

export const Head = () => <Seo title="home" />

export default IndexPage
