import styled from "styled-components"

export const StyledForm = styled.form<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 60px;
  max-width: 300px;
  width: 100%;

  @media screen and (max-width: 320px) {
    padding: 42px 16px;
    align-self: stretch;
    width: inherit;
  }

  p {
    text-align: center;
  }

  label {
    max-width: 300px;
    font-size: 1em;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;

    width: 100%;

    span {
      width: 150px;
      display: inline-block;
      margin-right: 16px;
    }

    input {
      height: 30px;
      border: 1px solid #c3c3c3;
      font-size: 1em;

      &:focus {
        outline-offset: 0;
        outline: transparent;
        border-bottom: 2px solid #222222;
      }
    }

    textarea {
      border: 1px solid #c3c3c3;
      max-width: 300px;
      height: 100px;
      font-size: 1em;

      &:focus {
        outline-offset: 0;
        outline: transparent;
        border-bottom: 2px solid #222222;
      }
    }
  }

  button {
    border: 2px solid #222222;
    font-size: 1.5em;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 72px;
    background-color: #ffffff;

    @media screen and (max-width: 320px) {
      display: flex;
      align-self: normal;
      justify-content: center;
    }

    &:hover {
      background-color: #222222;
      color: #ffffff;
    }

    &:focus {
      outline: transparent;
    }
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  flex-direction: column;

  h2 {
    margin-bottom: 16px;
  }
`
