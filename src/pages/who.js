import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WhoPage = props => (
  <Layout location={props.location}>
    <main>
      <article className="memphis-longhand">
        <h1>who?</h1>
        <p>what: mad disabled poet</p>
        <p>
          anaphora: <a href="https://en.pronouns.page/co">co/cos pronouns</a>
        </p>
        <p>gender: trans & non-binary</p>
        <p>from: middle of turtle island</p>
        <p>ancestrally from: germany & belgium</p>
        <p>living: with difficulty</p>
        <p>current location: west coast of turtle island</p>
      </article>
    </main>
  </Layout>
)

export const Head = () => (
  <Seo
    title="who?"
    description="who is Nova Larkin Schrage? click to find out!"
  />
)

export default WhoPage
