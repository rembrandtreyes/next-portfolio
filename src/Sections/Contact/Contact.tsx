/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import emailjs from "emailjs-com"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import useInput from "hooks/useInput"

import { ContactWrapper, StyledForm } from "./ContactStyles"

const Contact: React.FC = () => {
  const { value: name, bind: bindName, reset: resetName } = useInput("")
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("")
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput("")
  const [notification, setNotification] = useState("")

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID).then(
      result => result.text === "OK" && setNotification(`Thanks for saying hi ${name}, I'll be in touch!`),
      error => error && setNotification("Hmm, looks like something went wrong. Try again in a bit.")
    )
    resetName()
    resetEmail()
    resetMessage()
  }
  return (
    <ContactWrapper id="contact">
      <h3>Want to say hi?</h3>
      <StyledForm onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor="name">
          <input type="text" name="user_name" {...bindName} placeholder="Your name" />
        </label>
        <label htmlFor="email">
          <input type="email" name="user_email" {...bindEmail} placeholder="Your email" />
        </label>
        <label htmlFor="message">
          <textarea name="message" {...bindMessage} placeholder="Talk to me" />
        </label>
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        <p>{notification}</p>
      </StyledForm>
    </ContactWrapper>
  )
}

export default Contact
