import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
      bg: string
      navbar: string
      primary: string
      accent: string
    }
    dark: {
      bg: string
      navbar: string
      primary: string
      accent: string
    }
    size: {
      small: string
      medium: string
      large: string
    }
    btn: {
      normal: string
      hover: string
    }
  }
}
