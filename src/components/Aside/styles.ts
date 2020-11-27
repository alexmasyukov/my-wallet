import styled, { css } from 'styled-components'

export const Container = styled.div`
  grid-area: AS;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
  `}
`
