import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
      bg: string
      primary: string
      accent: string
    }
    dark: {
      bg: string
      primary: string
      accent: string
    }
  }
}
