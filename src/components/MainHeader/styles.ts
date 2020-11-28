import styled, { css } from 'styled-components'

export const Container = styled.div`
  grid-area: MH;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`

export const UserName = styled.span``

export const Welcome = styled.h3``
