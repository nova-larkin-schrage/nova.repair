import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import UnsubscribeForm from "../components/unsubscribe_form"

const ConnectPage = props => (
  <Layout location={props.location}>
    <div className="main">
      <article className="memphis-longhand">
        <h1>Email List Unsubscribe</h1>

        <div className="displayForm">
          <p>
            If you are currently on my email list and would like to remove yourself,
            please fill out the following form. Your request will be processed almost
            immediately. You will not receive a confirmation email.
          </p>

          <UnsubscribeForm />
        </div>
      </article>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="unsubscribe" description="Unsubscribe from my email list" />
)

export default ConnectPage
