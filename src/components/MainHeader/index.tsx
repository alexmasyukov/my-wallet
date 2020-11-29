import React, { FC, useMemo } from 'react'
import { Container, Profile, Welcome, UserName } from './styles'
import { random } from 'utils/helpers'
import { emojis } from '../../utils/emojis'
import { Toggle } from 'components/Toggle'

export const MainHeader: FC = () => {
  const emoji = useMemo(() => {
    const index = random(emojis.length)
    return emojis[index]
  }, [])

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Привет, {emoji}</Welcome>
        <UserName>Иван Иванов</UserName>
      </Profile>
    </Container>
  )
}
