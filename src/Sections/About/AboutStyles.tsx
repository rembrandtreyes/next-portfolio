import styled from "styled-components"

export const AboutWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 320px) {
    height: fit-content;
  }
`

export const ContentWrapper = styled.div`
  width: 500px;
  margin-right: 60px;

  h2 {
    font-size: 2.25em;
    display: flex;

    span {
      margin-right: 16px;
    }
  }

  p {
    line-height: 1.5;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 250px));
    overflow: hidden;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
  }

  li {
    margin: 4px 0;
    &:before {
      content: "";
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 16px;

    h2 {
      font-size: 1.5em;
    }

    ul {
      grid-template-columns: repeat(2, minmax(140px, 250px));
    }
  }
`

export const ImageWrapper = styled.div`
  width: 500px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
