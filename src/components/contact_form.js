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
              Name <br />
              <input type="text" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </label>
          </div>
          <div className="formItem">
            <label>
              Pronouns <br />
              <input type="text" name="pronouns" />
              <ValidationError
                prefix="Pronouns"
                field="pronouns"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

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
          <div className="formItem">
            <label>
              Subject <br />
              <input type="text" name="subject" />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formRow">
          <div className="formItem">
            <label>
              Message <br />
              <textarea name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formRow">
          <div className="formItem">
            <label>
              Cat Picture <br />
              <input type="text" name="cat_pic" />
              <ValidationError
                prefix="Cat Picture"
                field="cat_pic"
                errors={state.errors}
              />
            </label>
          </div>
        </div>

        <div className="formButtonRow">
          <div className="formItem">
            <button type="submit" disabled={state.submitting}>
              i promise that this is not a curse
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

/*
I am contacting you about:
poetry
star repair
pay/rate transparencyx
an image of a cat on the internet
*/

export default ContactForm
