import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xaykydpr")
  if (state.succeeded) {
    return <p>thank you :3</p>
  }
  return (
    <div className="collection">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <div className="formItem">
            <label>
              Email <br />
              <input type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formRow">
          <div className="formItem">
            <label>
              <input type="checkbox" name="interest" />
              I'm still interested in an email digest of your work,
              and would continue subscribing if the email list changed
              in the following ways (please describe below)
              <ValidationError
                prefix="Interest"
                field="interest"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formRow">
          <div className="formItem">
            <label>
              Comments <br />
              <textarea name="comments" />
              <ValidationError
                prefix="Comments"
                field="comments"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formRow">
          <div className="formItem">
            <label>
              <input type="checkbox" name="contact" />
              Please alert me via email if these changes are made
              <ValidationError
                prefix="Contact"
                field="contact"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formButtonRow">
          <div className="formItem">
            <button type="submit" disabled={state.submitting}>
              unsubscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
