import React, { FC } from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styles'

export const Toggle: FC = () => (
  <Container>
    <ToggleLabel>День</ToggleLabel>
    <ToggleSelector
      checked
      onChange={() => console.log('chech')}
      checkedIcon={false}
      uncheckedIcon={false}
    />
    <ToggleLabel>Ночь</ToggleLabel>
  </Container>
)
