import React, { FC } from 'react'
import { Container, TitleContainer, Controllers } from './styles'

export const ContentHeader: FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Статистика</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Btn A</button>
        <button type="button">Btn B</button>
      </Controllers>
    </Container>
  )
}
