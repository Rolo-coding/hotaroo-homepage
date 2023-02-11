import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.bgColor};
  }

  html,
  body {
    min-height: 100%;
    line-height: 1.5;
    color: ${props => props.theme.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    font-size: 100%;
    color: inherit;
    cursor: pointer;
    border: none;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  @font-face {
    font-family: 'apple_garamondregular';
    src: url('./fonts/apple_garamond-webfont.eot');
    src: url('./fonts/apple_garamond-webfont.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/apple_garamond-webfont.woff') format('woff'),
      url('./fonts/apple_garamond-webfont.ttf') format('truetype'),
      url('./fonts/apple_garamond-webfont.svg#apple_garamondregular')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }
}
`

export default GlobalStyle
