import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PublishedPage = props => (
  <Layout location={props.location}>
    <div className="main">
      <article className="memphis-longhand">
        <h1>Published Work</h1>
        <p>...</p>
        <p>(nothing here yet, please check back later :) )</p>
      </article>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo
    title="published work"
    description="Check out this list of my published work! :)"
  />
)

export default PublishedPage
