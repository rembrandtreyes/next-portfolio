import styled from "styled-components"

const Contact = () => (
  <ContactWrapper id="contact">
    <h2>Want to say hi?</h2>
    <a href="mailto:reyes.rembrandt@gmail.com">Get in touch</a>
  </ContactWrapper>
)

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  flex-direction: column;

  a {
    border: 2px solid #222222;
    font-size: 20px;
    text-decoration: none;
    padding: 16px 40px;
    font-weight: 800;
    color: #222222;
    border-radius: 4px;

    &:hover {
      background-color: #222222;
      color: #ffffff;
    }
  }
`

export default Contact
