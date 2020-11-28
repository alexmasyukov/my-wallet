import React, { FC } from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md'
import {
  Container,
  Header,
  LogoImage,
  MenuContainter,
  MenuItemLink,
  Title
} from './styles'
import logo from 'assets/logo.svg'

export const Aside: FC = () => {
  return (
    <Container>
      <Header>
        <LogoImage src={logo} alt='My Wallet' />
        <Title>Мой кошелек</Title>
      </Header>

      <MenuContainter>
        <MenuItemLink href='#'>
          <MdDashboard />
          Статистика
        </MenuItemLink>

        <MenuItemLink href='#'>
          <MdArrowUpward />
          Доходы
        </MenuItemLink>

        <MenuItemLink href='#'>
          <MdArrowDownward />
          Расходы
        </MenuItemLink>

        <MenuItemLink href='#'>
          <MdExitToApp />
          Выход
        </MenuItemLink>
      </MenuContainter>
    </Container>
  )
}
