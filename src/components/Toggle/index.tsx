import React, { FC } from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styles'

export const Toggle: FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      onChange={() => console.log('chech')}
      checkedIcon={false}
      uncheckedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
)
