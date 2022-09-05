import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact_form"
import EmailListForm from "../components/email_list_form"

const ConnectPage = props => (
  <Layout location={props.location}>
    <div className="main">
      <article className="memphis-longhand">
        <h1>Connect</h1>

        <div className="displayForm rowReverse">
          <p>
            If you would like to receive email updates whenever I publish a
            poem, consider subscribing to the email list that I use for this
            purpose! :)
          </p>

          <EmailListForm />
        </div>

        <hr />

        <div className="displayForm">
          <p>
            Social media is cursed. It is also not permitted in space. If you
            would like to contact me, please use this form.
          </p>

          <ContactForm />
        </div>
      </article>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="connect" description="Send me a message or join my email list!" />
)

export default ConnectPage
