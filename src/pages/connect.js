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
          <div class="text">
            <p>
              If you would like to receive email updates whenever I publish a
              poem, consider subscribing to the email list that I use for this
              purpose! :) <br />
            </p>
            <p>
              You will not receive a confirmation email (sorry, very low tech right now!).
              If you receive a "thank you" message on this page, then your subscription was
              processed successfully.
            </p>
            <p>
              If you would like to unsubscribe, please fill out the form on <a href="/unsubscribe">this page</a> at any time.
            </p>
          </div>

          <EmailListForm />
        </div>

        <hr />

        <div className="displayForm">
          <div class="text">
            <p>
              Social media is cursed. It is also not permitted in space. If you
              would like to contact me, please use the following form.
            </p>
          </div>

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
