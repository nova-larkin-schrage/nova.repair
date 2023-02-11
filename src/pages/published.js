import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PublishedPage = props => (
  <Layout location={props.location}>
    <div className="main">
      <article className="memphis-longhand">
        <h1>Published Work</h1>

        <ul>
          <li>
            <a href="https://www.openmindsquarterly.com">
              "New Disease"
            </a> — <a href="https://www.openmindsquarterly.com/product/winter-2023-pdf/">
              <i>Open Minds Quarterly</i>
            </a>
            <details>
              <summary>content warnings</summary>
              <strong>throughout:</strong> ableism, cissexism<br />
              <strong>mention:</strong> ableist slurs (reclaimed), ableist slurs (???), sexist slurs, misgendering<br />
            </details>
          </li>
        </ul>
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
