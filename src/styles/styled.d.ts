import 'styled-components'

export interface Theme {
  title: string

  colors: {
    primary: string
    secondary: string
    tetrionary: string

    white: string
    black: string
    gray: string

    success: string
    info: string
    warning: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
