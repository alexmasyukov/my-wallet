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
      width={36}
      height={20}
    />
    <ToggleLabel>Ночь</ToggleLabel>
  </Container>
)
