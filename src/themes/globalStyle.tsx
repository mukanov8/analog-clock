import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', system-ui, sans-serif, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

`
