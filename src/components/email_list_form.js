import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const EmailListForm = () => {
  const [state, handleSubmit] = useForm("TEST")
  if (state.succeeded) {
    return <p>thank you! :3</p>
  }
  return (
    <div className="collection">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <div className="formItem">
            <label>
              Email Address
              <input type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </div>

          <div className="formItem">
            <button type="submit" disabled={state.submitting}>
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default EmailListForm
