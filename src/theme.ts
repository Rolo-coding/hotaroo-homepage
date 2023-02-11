import type { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  bgColor: '#202023',
  borderColor: '#fff2',
  breakLine: '#fff3',
  textBg: '#3f3f46',
  btnWrapperBg: 'rgb(82 82 91)',
  menuBg: 'rgb(39 39 42)',
  itemBg: 'rgb(82 82 91 / 0.5)',
  primary: '#e5e5e5',
  accent: '#fff',
  anchor: '#ff633c',
  button: {
    color: '#181818',
    bg: '#81e6d9',
    hover: '#4fd1c5',
    link: {
      normal: 'rgba(129, 230, 217, 0.12)',
      active: '  rgba(129, 230, 217, 0.24)'
    }
  }
}

export const lightTheme: DefaultTheme = {
  bgColor: '#f8f4ed',
  borderColor: '#0004',
  breakLine: 'rgb(180 200 200)',
  textBg: '#fffa',
  menuBg: '#f4f5f0',
  itemBg: '#edf3f7',
  btnWrapperBg: '#805ad5',
  primary: '#181818',
  accent: '#000',
  anchor: '#3d7aed',
  button: {
    color: '#fff',
    bg: '#319795',
    hover: '#2c7a7b',
    link: {
      normal: '#e6fffa',
      active: '#b2f5ea'
    }
  }
}
