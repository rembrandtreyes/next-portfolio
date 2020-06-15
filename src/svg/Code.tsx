import styled from "styled-components"
import colors from "config/colors"

const Code = () => (
  <CodeWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M3.37,44A3.5,3.5,0,0,1,0,40.25V3A3.32,3.32,0,0,1,3.37,0H40.63A3.37,3.37,0,0,1,44,3V40.25A3.5,3.5,0,0,1,40.63,44Zm-1-33.69a.46.46,0,0,0-.46.46V40.25c0,1.1.61,1.86,1.48,1.86H40.63c.87,0,1.48-.76,1.48-1.86V10.77a.46.46,0,0,0-.46-.46Zm1-8.42A1.54,1.54,0,0,0,1.89,2.94V8a.45.45,0,0,0,.46.46h39.3A.45.45,0,0,0,42.11,8v-5a1.54,1.54,0,0,0-1.48-1Z" />
          <circle style={{ fill: colors.appleRed }} cx="6.56" cy="5.15" r="1" />
          <circle style={{ fill: colors.appleYellow }} cx="10.56" cy="5.15" r="1" />
          <circle style={{ fill: colors.appleGreen }} cx="14.56" cy="5.15" r="1" />
          <path
            style={{ fill: colors.brandSecondary }}
            d="M16.38,32.77a.92.92,0,0,1-.42-.1L7.54,28.46a.94.94,0,0,1-.1-1.63l8.42-5.61a.91.91,0,0,1,.52-.16.94.94,0,0,1,.53,1.72L10.5,27.06a.45.45,0,0,0,.05.79L16.81,31a.95.95,0,0,1-.43,1.79Z"
          />
          <path
            style={{ fill: colors.brandSecondary }}
            d="M27.62,32.77A.95.95,0,0,1,27.19,31l6.26-3.13a.45.45,0,0,0,0-.79l-6.41-4.28a.94.94,0,0,1,.53-1.72.91.91,0,0,1,.52.16l8.42,5.61a.94.94,0,0,1-.1,1.63L28,32.67A.92.92,0,0,1,27.62,32.77Z"
          />
          <path
            style={{ fill: colors.brandPrimary }}
            d="M19.19,37a.82.82,0,0,1-.26,0,.93.93,0,0,1-.64-1.16L23.9,16.13a1,1,0,0,1,.92-.69,1.09,1.09,0,0,1,.25,0,.93.93,0,0,1,.64,1.16L20.1,36.3A1,1,0,0,1,19.19,37Z"
          />
        </g>
      </g>
    </svg>
  </CodeWrapper>
)

export const CodeWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 24px auto;
`

export default Code
