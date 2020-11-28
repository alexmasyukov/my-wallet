import styled, { css } from 'styled-components'

export const Container = styled.div`
  grid-area: CT;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
  `}
`
