import styled from "styled-components"
import colors from "config/colors"

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
      border: 2px solid ${colors.brandSecondary};
      border-radius: 24px;
      font-size: 1em;
      padding-left: 16px;

      ::placeholder {
        user-select: none;
        color: ${colors.medium};
        font-family: "Lato", sans-serif;
      }

      &:focus {
        outline-offset: 0;
        outline: transparent;
      }
    }

    textarea {
      border: 2px solid ${colors.brandSecondary};
      max-width: 300px;
      font-size: 1em;
      height: 30px;
      padding: 8px 0 0 16px;
      border-radius: 24px;
      font-family: "Lato", sans-serif;
      transition: height 250ms ease;

      ::placeholder {
        user-select: none;
        color: ${colors.medium};
        font-family: "Lato", sans-serif;
      }

      &:focus {
        outline-offset: 0;
        outline: transparent;
        height: 100px;
      }

      resize: none;
    }
  }

  button {
    border: 2px solid ${colors.brandSecondary};
    font-size: 1.5em;
    cursor: pointer;
    border-radius: 24px;
    padding: 8px;
    width: 100%;
    background-color: #ffffff;
    color: ${colors.brandSecondary};

    @media screen and (max-width: 320px) {
      display: flex;
      align-self: normal;
      justify-content: center;
    }

    &:hover {
      background-color: ${colors.brandSecondary};
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
