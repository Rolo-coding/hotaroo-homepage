import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string
    cardColor: string
    borderColor: string
    breakLine: string
    textBg: string
    menuBg: string
    itemBg: string
    btnWrapperBg: string
    primary: string
    accent: string
    anchor: string
    button: {
      color: string
      bg: string
      hover: string
      link: {
        normal: string
        active: string
      }
    }
  }
}
