import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string
    borderColor: string
    textBg: string
    primary: string
    accent: string
  }
}
