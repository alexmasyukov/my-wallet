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
        <LogoImage src={logo} alt="My Wallet" />
        <Title>Мой кошелек</Title>
      </Header>

      <MenuContainter>
        <MenuItemLink to="/dashboard">
          <MdDashboard />
          Статистика
        </MenuItemLink>

        <MenuItemLink to="/list/income">
          <MdArrowUpward />
          Доходы
        </MenuItemLink>

        <MenuItemLink to="/list/expense">
          <MdArrowDownward />
          Расходы
        </MenuItemLink>

        <MenuItemLink to="/exit">
          <MdExitToApp />
          Выход
        </MenuItemLink>
      </MenuContainter>
    </Container>
  )
}
