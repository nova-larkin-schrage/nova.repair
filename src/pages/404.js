import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = props => (
  <Layout location={props.location}>
    <article className="big-text">
      <h1>404: Not Found</h1>
    </article>
  </Layout>
)

export const Head = () => <Seo title="404" description="nothing is here yet!" />

export default NotFoundPage
