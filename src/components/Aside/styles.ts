import styled, { css } from 'styled-components'

export const Container = styled.div`
  grid-area: AS;

  padding-left: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-right: 1px solid ${theme.colors.gray};
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`

export const LogoImage = styled.img`
  height: 40px;
  width: 40px;
`

export const MenuContainter = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  transition: opacity 0.3s;
  font-size: 1.1em;
  margin: 7px 0;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`
